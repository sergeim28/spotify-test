&nbsp;


&nbsp;
# Pre-requisites ✅
- Add your Spotify client ID & secret to `config.js`
  - Note. **Never add this type of config to version control. This would usually come from your build server.**

&nbsp;
# Requirements 📖
- Fetch and display *Released This Week* songs
  - Use the API path `new-releases`
- Fetch and display *Featured Playlists*
  - Use the API path `featured-playlists`
- Fetch and display *Browse* genres
  - Use the API path `categories`
- Loading state/UI *(optional, current UX is already clean)*

&nbsp;
# Think about 💡
- Taking a look at the Spotify API documentation
Yes, I have managed to get data from Spotify public API
- Do you resolve each API request one after the other or in parallel?
I resolve all requests in parallel which is nice in terms of performance.
- Where do you make the API requests?
Fetching token is done in App component level, because I think this token is global and should be used in all child components.
Fetching released this week songs, featured playlists, browse genres are done in DiscoverBlock component, and as they use hooks, component performance is fine means that it does not do any unnecessary rerendering.
- How much logic do you offload out of the UI components?
DiscoverBlock component is mainly responsible for UI while Discover is responsible to fetch the data.

&nbsp;
# What's Already Been Done 🏁
- UI/UX for all elements, including previews (mobile responsive)

&nbsp;
# Screenshots 🌄
&nbsp;
![screenshot-desktop](https://puu.sh/GwPLE/3be580156a.png)
<img alt="screenshot-mobile" width=400 src="https://puu.sh/GwPLS/0bcb566d23.png" />
