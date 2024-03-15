function emailsend() {
    var toAddress = "ryan.lucas@escolar.ifrn.edu.br";
    var subject = "fodase";
    var emailBody = "HAHAAHHAHAHAHHAHAAHHAHAHAHAHHAHAHAHAHAH"
    MailApp.sendEmail(toAddress, subject, emailBody);
}