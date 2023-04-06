# TuneSwap
A service for moving music across streaming platforms.

## Current Status
TuneSwap is currently in an alpha stage, and although functional, does not have all planned features available yet. 
Additionally, there may be significant issues with the service as of now.

Currently, swaps may take some time to actually process, as we are still building a library/cache of music. 
Playlists that you have already swapped and would like to share with other individuals will be quickly transferred, 
as the music and platform information will have already been cached. Additionally, as time goes on, music that is 
relatively popular will likely be quickly transferred based off of that cache.

We are also exploring the best way to accurately find music on each individual platform. Currently, you may notice 
that some songs are not found on the platform of your choice, although they may indeed exist. This could be due to 
certain naming differences for tracks, different albums, etc. We will be addressing these issues as time goes on.

## Features
Many of the features provided by TuneSwap are features that are offered by other competing services. However, we
would like to offer these services at a much reduced - if not free - cost to users. Many features, such as transfers
in the background, playlists over 500 songs, and continuous syncing of playlists are "premium" features on other
services. We are looking at offering these features free of charge to the user.

With that said, we do anticipate having some features behind a subscription model. For example, we consider allowing 
for continuous syncing to be performed once daily for free users, but more often (i.e. every 5-10 minutes) for 
subscribers. There may be a "wait" period between swaps (i.e. 1 hour) for non-subscribers, which can be bypassed 
either with an "interstitial ad" or by purchasing a subscription. Advertisements may also be displayed across both 
the web and mobile versions of the service for non-subscribers.

These models will be used to offset any costs of running the service. It is not our goal to make significant profit 
off of this service, however, we do wish to keep costs to a minimum. As we discover what exactly those costs will be,
we will make adjustments to ad and subscription models as necessary.

## Reporting Issues
You are encouraged to report issues here on GitHub, or by emailing 
[support@tuneswap.app](mailto:support@tuneswap.app). We will make every effort to quickly and efficiently implement 
any necessary changes to production to address these issues.

You are also encouraged to contribute if you believe you have any bug fixes or interesting features to add on. 
Please open a pull request and we will review it.

## Other Repos
- [Backend](https://github.com/gkasdorf/tune-swap-api)
- [iOS](https://github.com/gkasdorf/tune-swap-ios)