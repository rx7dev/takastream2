import axios from "axios";

const client_id = "wznntud0bo70asw2ff31n59yukj3cz";

export default axios.create({
  baseURL: "https://api.twitch.tv/helix/",
  headers: { "Client-ID": client_id },
  params: {
    // optional
  }
});
