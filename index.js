const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.token

var time = new Date();

client.on('ready', () => { // 클라이언트 준비 됐을 때
    console.log("state is online"); // 콘솔로 전송
    client.user.setPresence({ game: { name: 'Pepsi' }, status: 'online'}); // 봇 상태 
})

client.on('message', (message) => {
    if(message.author.bot) return; 

    console.log('who sent messege');

    if(message.content == '!출근') { // 만약 메세지 내용이 !출근 일 때
        message.delete(message.content); // 메세지 삭제
        message.reply('**```diff\n\+ 출근하셨습니다. 출근시각 : ' + time.toLocaleTimeString() + ' ```**') // 괄호안 메세지로 답장

    }

    if(message.content == '!퇴근') { // 만약 메세지 내용이 !퇴근 일때    
        message.delete(message.content); // 메세지 삭제
        message.reply('**```diff\n\- 퇴근하셨습니다. 퇴근시각 : ' + time.toLocaleTimeString() + ' ```**') // 괄호 안 메세지로 답장
    }

})

client.login(token)