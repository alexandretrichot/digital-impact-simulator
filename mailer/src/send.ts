import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { getText, getHtml } from './content';

export const send = async (to: string, sessionId: string) => {
	const transporter = nodemailer.createTransport({
		host: process.env['EMAIL_HOST'],
		port: Number(process.env['EMAIL_PORT']),
		secure: true,
		auth: {
			user: process.env['EMAIL_USER'],
			pass: process.env['EMAIL_PASSWORD'],
		},
	});

	const link = `${process.env['BASE_URL']}simulate?compareTo=${sessionId}&self`;

	const ret = await transporter.sendMail({
		from: '"Meuse Nature Environnement" <noreply@meusenature.fr>',
		to,
		subject: `Testez votre impact du digital sur l'environnement ✔`,
		text: getText(link),
		html: getHtml(link),
	});

	return ret as {
		accepted: string[],
		rejected: string[],
		envelopeTime: number,
		messageTime: number,
		messageSize: number,
		response: string,
	} & SMTPTransport.SentMessageInfo
};
