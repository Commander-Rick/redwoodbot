const Discord =  require('discord.js');
const client = new Discord.client();
const token 'NDA2NjQxNjc5NTcyMTQwMDMy.DU16Jg.yPLo4-lowW6AxB3HNDDaeqfKJto';

client.on('ready', () => {
	console.log('I am ready!'):
});

client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find('name', 'member-log');
	if (!channel) return;
	channel.send('Welcome to Redwood Programming Society, ${member}');
});

client.on('message', message => {
if (message.content === '!role Dave Cult ') {
		addRole(Dave Cult Member, reason){
			if (!(role instanceof Role)) role = this.guild.roles.get(Dave Cult Member);
			if (!role) return Promise.reject(new TypeError('Supplied parameter was neither a role nor a snowflake.'));
			return this.client.rest.methods.addMemberRole(this, role, reason);
		}
	
	}
}

client.login(token);


