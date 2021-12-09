const { Util, MessageEmbed } = require("discord.js");
const { TrackUtils, Player } = require("erela.js");
const prettyMilliseconds = require("pretty-ms");

module.exports = {
  name: "join",
  description: "Join your chanel",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["j"],
    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    if(!message.member.voice.channel) return message.channel.send("❌ | **You must be in a voice channel!**"); //If you are not in the voice channel, then return a message
    if(message.member.voice.channel.join()){
      return message.channel.send(":thumbsup:  | **Joining**")
    }

  },
  SlashCommand: {
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
      if(!message.member.voice.channel) return message.channel.send("❌ | **You must be in a voice channel!**"); //If you are not in the voice channel, then return a message
      if(message.member.voice.channel.join()){
        return message.channel.send(":thumbsup:  | **Joining**")
      }
    },

  },


};
