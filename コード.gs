/**
 * 拡張機能からの POST リクエストを受け取り、
 * OfficeファイルをPDFに変換して Base64 で返す API (完全版)
 */
function doPost(e) {
  try {
    // 1. 拡張機能から 'text/plain' で送られてきたJSON文字列を解析
    let data = JSON.parse(e.postData.contents),
        fileName = data.filename,
        fileData = data.fileData; // Base64文字列

    if (!fileName || !fileData) throw new Error("ファイルデータが空です");

    let fileNameLower = fileName.toLowerCase(),
        targetMimeType = "";

    // 拡張子から Googleドライブ形式の MIME Type を決定
    if (fileNameLower.indexOf(".doc") > -1) {
      targetMimeType = MimeType.GOOGLE_DOCS;
    } else if (fileNameLower.indexOf(".xls") > -1) {
      targetMimeType = MimeType.GOOGLE_SHEETS;
    } else if (fileNameLower.indexOf(".ppt") > -1) {
      targetMimeType = MimeType.GOOGLE_SLIDES;
    } else {
      throw new Error("未対応の拡張子です: " + fileName);
    }

    // 2. Base64文字列をファイル(Blob)に復元
    let decoded = Utilities.base64Decode(fileData),
        fileBlob = Utilities.newBlob(decoded, "application/octet-stream", fileName);

    // 3. Googleドライブに一時ファイルとして作成（自動でGoogle形式に変換される）
    let tempFile = Drive.Files.insert({
      title: fileName,
      mimeType: targetMimeType
    }, fileBlob);

    // 4. 作成した一時ファイルを PDF 形式で取得
    let pdfBlob = DriveApp.getFileById(tempFile.id).getAs(MimeType.PDF);
    
    // 5. 拡張機能に返すために、PDFを Base64 文字列にエンコード
    let base64Result = Utilities.base64Encode(pdfBlob.getBytes());

    // 6. 用済みのゴミ(一時ファイル)を削除
    Drive.Files.remove(tempFile.id);

    // 7. JSONとしてレスポンスを返す
    let result = {
      success: true,
      base64: base64Result
    };

    return ContentService.createTextOutput(JSON.stringify(result))
                         .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    let errorResult = {
      success: false,
      error: error.toString()
    };
    return ContentService.createTextOutput(JSON.stringify(errorResult))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
