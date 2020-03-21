# Creatiview

Creatiview aims to be a tool for artists to upload their work and share for review and comments by sharing a link. Reviewers can then follow that link, and leave their thoughts on specific parts of the piece by clicking their point of interest!

Stories can be found here on Trello: https://trello.com/b/XTegjaWo/creatiview

## Setup

> Needs yarn and node

1. Clone/download repo. In terminal, move to your local copy's folder
2. Run `yarn` to install dependencies.
3. Run `yarn start` to serve app on localhost

For a quick component overview, run Storybook
`yarn storybook`

Note: This project comes with recommended VS Code extensions that improve the development process. Give it a try if you like!

## Image Upload Preparations

> For now, images are self hosted only on Google at the moment!

To use this app, you'll have to have:
-  a Google drive account
- a folder within drive that is set to public
-  the file id of the image you'd like to upload.

**Setup Public Folder**
1. Click a folder you'd like to make public.
2. Click the dropdown by the folder's name. Click "Share". 
![Share button found in dropwdown](https://drive.google.com/uc?id=1ea0VtWHky4CHgrNPawrBpyhHqyRYDYN5)
3. Click "Advanced" on the bottom right corner.
4. Click "Change" in the "Who can access" section.
![Change button in Share Settings pop up](https://drive.google.com/uc?id=1unRKpP-K0xAz4NaucDC3mu-4Hm4VL7bN)
5.Change it to "Public on the Web". By default "Can view only" should be selected and is ideal!
![Public on the Web setting in the Link Sharing pop up](https://drive.google.com/uc?id=1Kr4UYLETie_KKlLSBG4U1kaJkQw5GnEM)
6. Finally click "Done" to apply. 
Now anything you put in here is accessible to the public.

**Accessing your Image in the App**
> Base URL: `https://drive.google.com/uc?id=<file-id-from-drive>)`
1. Upload your image to your public folder in Google Drive.
2. Right click the file, then click "Share".
3. Copy the URL there (you can only copy the full URL). The id is after the `/file/d` part,
  copy it and paste it in the base URL replacing the `<file-id-from-drive>`.
  
  Example:
  Here is the share link for a sample upload:
  `https://drive.google.com/file/d/17i1_TOLIO_9AzaGAES9zs_p314RADHS7/view?usp=sharing`
  
  The resulting URL is
  `https://drive.google.com/uc?id=17i1_TOLIO_9AzaGAES9zs_p314RADHS7`
  ![Get file id from the link here](https://drive.google.com/uc?id=1nJlFQnMPws8YlRSRNHSW8TkGpVIkMTwP)

You can compressed using [TinyPNG](https://tinypng.com/). Lessens the quality but makes the app a little faster!
