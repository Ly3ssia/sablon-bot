const { EmbedBuilder, PermissionsBitField, ChannelType } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const fetchAll = require('discord-fetch-all');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("şablon")
    .setDescription("Bir sunucunun şablonunu kurarsın!")
    .addStringOption(option => option.setName("id").setDescription("Sunucunun ID nedir?").setRequired(true)),
    run: async (client, interaction) => {
if(!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply("Yeterli yetkin bulunmamakta!")
interaction.guild.channels.cache.filter(kanallar => {
kanallar.delete().catch(e => {})
})
     const server = interaction.options.getString("id")
      const id = client.guilds.cache.get(server)
      if(!id) return interaction.reply("Böyle bir sunucu bulunamadı veya belirtilen sunucuda yokum.")
      client.guilds.resolve(server).channels.cache.map((channel) => {
  interaction.guild.channels.create({name: channel.name, type: channel.type})
})
await interaction.reply("Kanallar kuruluyor...").catch()
 }
 };
