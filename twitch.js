let options = {
    width: 854,
    height: 480,
    channel: "clairelynnd",
    // Only needed if this page is going to be embedded on other websites
    parent: ["https://netlify.app","https://euphonious-hotteok-de570c.netlify.app/"]
      };

let player = new Twitch.Player("twitch-embed", options);