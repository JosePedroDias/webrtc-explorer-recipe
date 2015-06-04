# webrtc-explorer-recipe



## what?

A recipe for using [webrtc-explorer](https://github.com/diasdavid/webrtc-explorer) easily,
without browserify.



## how to obtain the webrtc-explorer browser lib

a) to generate the latest version of the browser lib in build dir:

	[sudo] npm install
	npm run build


b) alternatively you can use the one in the build dir.
this was generated 2015/06/04 using node.js 0.10.04



## how to use it

Check the `demo` dir



## a bit more info

The signalling server starts the process.  
You must connect to the same signalling server as the node you want to reach.  
To spawn your own clone [this repository](https://github.com/diasdavid/webrtc-explorer-signalling-server).

Be sure to read about the project and some of its applications on the [author's blog](http://blog.daviddias.me/2015/03/22/enter-webrtc-explorer).
