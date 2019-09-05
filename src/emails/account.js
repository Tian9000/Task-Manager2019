const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'donimichael220@gmail.com',
        subject: 'Buat App Untuk Bangsa',
        text: `Buatlah App Untuk Kemajuan Bangsa, ${name}. Agar Bangsa Kita Hebat.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'donimichael220@gmail.com',
        subject: 'Saya Izin Keluar, Ada Urusan!',
        text: `Bye, ${name}. Saya Pasti Kembali.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}