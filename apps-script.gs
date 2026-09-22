function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('Halim Sort Center MW')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName('Scorecard');

    if (!sheet) {
      sheet = spreadsheet.insertSheet('Scorecard');
      sheet.appendRow([
        'Timestamp',
        'Nama',
        'WFM',
        'Team',
        'Avatar',
        'Skor',
        'Max Skor',
        'Status'
      ]);
    }

    const status = payload.score >= 80 ? 'Lulus' : payload.score >= 60 ? 'Cukup' : 'Perlu belajar';

    sheet.appendRow([
      new Date(),
      payload.name || '',
      payload.wfm || '',
      payload.team || '',
      payload.avatar || '',
      Number(payload.score || 0),
      Number(payload.maxScore || 100),
      status
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', saved: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
