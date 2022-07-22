import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail'

dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const NOTIFYME_CREATE = "Created a Post"
export const NOTIFYME_EDIT = "Edited a Post"

const notifyMe = async (wobPost, typeOfNotifyMe) => {
    const {
        word, pronunciation, partOfSpeech, definition, artistName,
        artistLink, selectedFile, username, createdAt
    } = wobPost
    const subject = `The user "${username}" ${typeOfNotifyMe}`

    const msg = {
        to: process.env.SENDGRID_EMAIL_RECEIVER,
        from: process.env.SENDGRID_EMAIL_SENDER,
        subject,
        html: `
            <html>
                <head>
                    <title></title>
                    <style>
                        h3{
                            font-weight: normal;
                        }
                    </style>
                </head>
                <body>
                    <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe"
                        style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;"
                        data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                        <h3>Word: <strong>${word}</strong></h3>
                        <h3>Pronunciation: <a href=${pronunciation}>Link to Pronunciation</a></h3>
                        <audio preload="auto" src=${pronunciation}></audio>
                        <h3>Part of Speech: <strong>${partOfSpeech}</strong></h3>
                        <h3>Definition: <strong>${definition}</strong></h3>
                        <h3>Artist: <a href=${artistLink}>${artistName}</a></h3>
                        <h3>Date: <strong>${createdAt}</strong></h3>
                        <br />
                        <p>The image below will only display in Apple Mail</p>
                        <img src=${selectedFile} width="300px" height="300px" />

                        <p style="font-size:12px; line-height:20px;">
                            <a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank"
                                style="font-family:sans-serif;text-decoration:none;">
                                Unsubscribe
                            </a>
                            -
                            <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences"
                                style="font-family:sans-serif;text-decoration:none;">
                                Unsubscribe Preferences
                            </a>
                        </p>
                    </div>
                </body>
            </html>
        `
    }

    await sendEmail(msg)
}

const sendEmail = async (msg) => {
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error.response.body)
            console.log("- - - - - - - - - - - - - - - - - -");
            console.log(error);
        })
}

export default notifyMe