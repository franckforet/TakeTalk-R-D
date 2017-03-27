//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;

(function(){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                           //
// packages/mrt_filesaver/packages/mrt_filesaver.js                                                          //
//                                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                             //
(function () {                                                                                               // 1
                                                                                                             // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 3
//                                                                                                    //     // 4
// packages/mrt:filesaver/lib/FileSaver.js                                                            //     // 5
//                                                                                                    //     // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 7
                                                                                                      //     // 8
/*! FileSaver.js                                                                                      // 1   // 9
 *  A saveAs() FileSaver implementation.                                                              // 2   // 10
 *  2014-01-24                                                                                        // 3   // 11
 *                                                                                                    // 4   // 12
 *  By Eli Grey, http://eligrey.com                                                                   // 5   // 13
 *  License: X11/MIT                                                                                  // 6   // 14
 *    See LICENSE.md                                                                                  // 7   // 15
 */                                                                                                   // 8   // 16
                                                                                                      // 9   // 17
/*global self */                                                                                      // 10  // 18
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */ // 11  // 19
                                                                                                      // 12  // 20
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */                   // 13  // 21
                                                                                                      // 14  // 22
var saveAs = saveAs                                                                                   // 15  // 23
  // IE 10+ (native saveAs)                                                                           // 16  // 24
  || (typeof navigator !== "undefined" &&                                                             // 17  // 25
      navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator))                       // 18  // 26
  // Everyone else                                                                                    // 19  // 27
  || (function(view) {                                                                                // 20  // 28
	"use strict";                                                                                        // 21  // 29
	// IE <10 is explicitly unsupported                                                                  // 22  // 30
	if (typeof navigator !== "undefined" &&                                                              // 23  // 31
	    /MSIE [1-9]\./.test(navigator.userAgent)) {                                                      // 24  // 32
		return;                                                                                             // 25  // 33
	}                                                                                                    // 26  // 34
	var                                                                                                  // 27  // 35
		  doc = view.document                                                                               // 28  // 36
		  // only get URL when necessary in case BlobBuilder.js hasn't overridden it yet                    // 29  // 37
		, get_URL = function() {                                                                            // 30  // 38
			return view.URL || view.webkitURL || view;                                                         // 31  // 39
		}                                                                                                   // 32  // 40
		, URL = view.URL || view.webkitURL || view                                                          // 33  // 41
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")                              // 34  // 42
		, can_use_save_link = !view.externalHost && "download" in save_link                                 // 35  // 43
		, click = function(node) {                                                                          // 36  // 44
			var event = doc.createEvent("MouseEvents");                                                        // 37  // 45
			event.initMouseEvent(                                                                              // 38  // 46
				"click", true, false, view, 0, 0, 0, 0, 0                                                         // 39  // 47
				, false, false, false, false, 0, null                                                             // 40  // 48
			);                                                                                                 // 41  // 49
			node.dispatchEvent(event);                                                                         // 42  // 50
		}                                                                                                   // 43  // 51
		, webkit_req_fs = view.webkitRequestFileSystem                                                      // 44  // 52
		, req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem                     // 45  // 53
		, throw_outside = function(ex) {                                                                    // 46  // 54
			(view.setImmediate || view.setTimeout)(function() {                                                // 47  // 55
				throw ex;                                                                                         // 48  // 56
			}, 0);                                                                                             // 49  // 57
		}                                                                                                   // 50  // 58
		, force_saveable_type = "application/octet-stream"                                                  // 51  // 59
		, fs_min_size = 0                                                                                   // 52  // 60
		, deletion_queue = []                                                                               // 53  // 61
		, process_deletion_queue = function() {                                                             // 54  // 62
			var i = deletion_queue.length;                                                                     // 55  // 63
			while (i--) {                                                                                      // 56  // 64
				var file = deletion_queue[i];                                                                     // 57  // 65
				if (typeof file === "string") { // file is an object URL                                          // 58  // 66
					URL.revokeObjectURL(file);                                                                       // 59  // 67
				} else { // file is a File                                                                        // 60  // 68
					file.remove();                                                                                   // 61  // 69
				}                                                                                                 // 62  // 70
			}                                                                                                  // 63  // 71
			deletion_queue.length = 0; // clear queue                                                          // 64  // 72
		}                                                                                                   // 65  // 73
		, dispatch = function(filesaver, event_types, event) {                                              // 66  // 74
			event_types = [].concat(event_types);                                                              // 67  // 75
			var i = event_types.length;                                                                        // 68  // 76
			while (i--) {                                                                                      // 69  // 77
				var listener = filesaver["on" + event_types[i]];                                                  // 70  // 78
				if (typeof listener === "function") {                                                             // 71  // 79
					try {                                                                                            // 72  // 80
						listener.call(filesaver, event || filesaver);                                                   // 73  // 81
					} catch (ex) {                                                                                   // 74  // 82
						throw_outside(ex);                                                                              // 75  // 83
					}                                                                                                // 76  // 84
				}                                                                                                 // 77  // 85
			}                                                                                                  // 78  // 86
		}                                                                                                   // 79  // 87
		, FileSaver = function(blob, name) {                                                                // 80  // 88
			// First try a.download, then web filesystem, then object URLs                                     // 81  // 89
			var                                                                                                // 82  // 90
				  filesaver = this                                                                                // 83  // 91
				, type = blob.type                                                                                // 84  // 92
				, blob_changed = false                                                                            // 85  // 93
				, object_url                                                                                      // 86  // 94
				, target_view                                                                                     // 87  // 95
				, get_object_url = function() {                                                                   // 88  // 96
					var object_url = get_URL().createObjectURL(blob);                                                // 89  // 97
					deletion_queue.push(object_url);                                                                 // 90  // 98
					return object_url;                                                                               // 91  // 99
				}                                                                                                 // 92  // 100
				, dispatch_all = function() {                                                                     // 93  // 101
					dispatch(filesaver, "writestart progress write writeend".split(" "));                            // 94  // 102
				}                                                                                                 // 95  // 103
				// on any filesys errors revert to saving with object URLs                                        // 96  // 104
				, fs_error = function() {                                                                         // 97  // 105
					// don't create more object URLs than needed                                                     // 98  // 106
					if (blob_changed || !object_url) {                                                               // 99  // 107
						object_url = get_object_url(blob);                                                              // 100
					}                                                                                                // 101
					if (target_view) {                                                                               // 102
						target_view.location.href = object_url;                                                         // 103
					} else {                                                                                         // 104
						window.open(object_url, "_blank");                                                              // 105
					}                                                                                                // 106
					filesaver.readyState = filesaver.DONE;                                                           // 107
					dispatch_all();                                                                                  // 108
				}                                                                                                 // 109
				, abortable = function(func) {                                                                    // 110
					return function() {                                                                              // 111
						if (filesaver.readyState !== filesaver.DONE) {                                                  // 112
							return func.apply(this, arguments);                                                            // 113
						}                                                                                               // 114
					};                                                                                               // 115
				}                                                                                                 // 116
				, create_if_not_found = {create: true, exclusive: false}                                          // 117
				, slice                                                                                           // 118
			;                                                                                                  // 119
			filesaver.readyState = filesaver.INIT;                                                             // 120
			if (!name) {                                                                                       // 121
				name = "download";                                                                                // 122
			}                                                                                                  // 123
			if (can_use_save_link) {                                                                           // 124
				object_url = get_object_url(blob);                                                                // 125
				// FF for Android has a nasty garbage collection mechanism                                        // 126
				// that turns all objects that are not pure javascript into 'deadObject'                          // 127
				// this means `doc` and `save_link` are unusable and need to be recreated                         // 128
				// `view` is usable though:                                                                       // 129
				doc = view.document;                                                                              // 130
				save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a");                             // 131
				save_link.href = object_url;                                                                      // 132
				save_link.download = name;                                                                        // 133
				var event = doc.createEvent("MouseEvents");                                                       // 134
				event.initMouseEvent(                                                                             // 135
					"click", true, false, view, 0, 0, 0, 0, 0                                                        // 136
					, false, false, false, false, 0, null                                                            // 137
				);                                                                                                // 138
				save_link.dispatchEvent(event);                                                                   // 139
				filesaver.readyState = filesaver.DONE;                                                            // 140
				dispatch_all();                                                                                   // 141
				return;                                                                                           // 142
			}                                                                                                  // 143
			// Object and web filesystem URLs have a problem saving in Google Chrome when                      // 144
			// viewed in a tab, so I force save with application/octet-stream                                  // 145
			// http://code.google.com/p/chromium/issues/detail?id=91158                                        // 146
			if (view.chrome && type && type !== force_saveable_type) {                                         // 147
				slice = blob.slice || blob.webkitSlice;                                                           // 148
				blob = slice.call(blob, 0, blob.size, force_saveable_type);                                       // 149
				blob_changed = true;                                                                              // 150
			}                                                                                                  // 151
			// Since I can't be sure that the guessed media type will trigger a download                       // 152
			// in WebKit, I append .download to the filename.                                                  // 153
			// https://bugs.webkit.org/show_bug.cgi?id=65440                                                   // 154
			if (webkit_req_fs && name !== "download") {                                                        // 155
				name += ".download";                                                                              // 156
			}                                                                                                  // 157
			if (type === force_saveable_type || webkit_req_fs) {                                               // 158
				target_view = view;                                                                               // 159
			}                                                                                                  // 160
			if (!req_fs) {                                                                                     // 161
				fs_error();                                                                                       // 162
				return;                                                                                           // 163
			}                                                                                                  // 164
			fs_min_size += blob.size;                                                                          // 165
			req_fs(view.TEMPORARY, fs_min_size, abortable(function(fs) {                                       // 166
				fs.root.getDirectory("saved", create_if_not_found, abortable(function(dir) {                      // 167
					var save = function() {                                                                          // 168
						dir.getFile(name, create_if_not_found, abortable(function(file) {                               // 169
							file.createWriter(abortable(function(writer) {                                                 // 170
								writer.onwriteend = function(event) {                                                         // 171
									target_view.location.href = file.toURL();                                                    // 172
									deletion_queue.push(file);                                                                   // 173
									filesaver.readyState = filesaver.DONE;                                                       // 174
									dispatch(filesaver, "writeend", event);                                                      // 175
								};                                                                                            // 176
								writer.onerror = function() {                                                                 // 177
									var error = writer.error;                                                                    // 178
									if (error.code !== error.ABORT_ERR) {                                                        // 179
										fs_error();                                                                                 // 180
									}                                                                                            // 181
								};                                                                                            // 182
								"writestart progress write abort".split(" ").forEach(function(event) {                        // 183
									writer["on" + event] = filesaver["on" + event];                                              // 184
								});                                                                                           // 185
								writer.write(blob);                                                                           // 186
								filesaver.abort = function() {                                                                // 187
									writer.abort();                                                                              // 188
									filesaver.readyState = filesaver.DONE;                                                       // 189
								};                                                                                            // 190
								filesaver.readyState = filesaver.WRITING;                                                     // 191
							}), fs_error);                                                                                 // 192
						}), fs_error);                                                                                  // 193
					};                                                                                               // 194
					dir.getFile(name, {create: false}, abortable(function(file) {                                    // 195
						// delete file if it already exists                                                             // 196
						file.remove();                                                                                  // 197
						save();                                                                                         // 198
					}), abortable(function(ex) {                                                                     // 199
						if (ex.code === ex.NOT_FOUND_ERR) {                                                             // 200
							save();                                                                                        // 201
						} else {                                                                                        // 202
							fs_error();                                                                                    // 203
						}                                                                                               // 204
					}));                                                                                             // 205
				}), fs_error);                                                                                    // 206
			}), fs_error);                                                                                     // 207
		}                                                                                                   // 208
		, FS_proto = FileSaver.prototype                                                                    // 209
		, saveAs = function(blob, name) {                                                                   // 210
			return new FileSaver(blob, name);                                                                  // 211
		}                                                                                                   // 212
	;                                                                                                    // 213
	FS_proto.abort = function() {                                                                        // 214
		var filesaver = this;                                                                               // 215
		filesaver.readyState = filesaver.DONE;                                                              // 216
		dispatch(filesaver, "abort");                                                                       // 217
	};                                                                                                   // 218
	FS_proto.readyState = FS_proto.INIT = 0;                                                             // 219
	FS_proto.WRITING = 1;                                                                                // 220
	FS_proto.DONE = 2;                                                                                   // 221
                                                                                                      // 222
	FS_proto.error =                                                                                     // 223
	FS_proto.onwritestart =                                                                              // 224
	FS_proto.onprogress =                                                                                // 225
	FS_proto.onwrite =                                                                                   // 226
	FS_proto.onabort =                                                                                   // 227
	FS_proto.onerror =                                                                                   // 228
	FS_proto.onwriteend =                                                                                // 229
		null;                                                                                               // 230
                                                                                                      // 231
	view.addEventListener("unload", process_deletion_queue, false);                                      // 232
	saveAs.unload = function() {                                                                         // 233
		process_deletion_queue();                                                                           // 234
		view.removeEventListener("unload", process_deletion_queue, false);                                  // 235
	};                                                                                                   // 236
	return saveAs;                                                                                       // 237
}(                                                                                                    // 238
	   typeof self !== "undefined" && self                                                               // 239
	|| typeof window !== "undefined" && window                                                           // 240
	|| this.content                                                                                      // 241
));                                                                                                   // 242
// `self` is undefined in Firefox for Android content script context                                  // 243
// while `this` is nsIContentFrameMessageManager                                                      // 244
// with an attribute `content` that corresponds to the window                                         // 245
                                                                                                      // 246
if (typeof module !== "undefined" && module !== null) {                                               // 247
  module.exports = saveAs;                                                                            // 248
} else if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {              // 249
  define([], function() {                                                                             // 250
    return saveAs;                                                                                    // 251
  });                                                                                                 // 252
}                                                                                                     // 253
                                                                                                      // 254
window.saveAs = saveAs;                                                                               // 255
////////////////////////////////////////////////////////////////////////////////////////////////////////     // 264
                                                                                                             // 265
}).call(this);                                                                                               // 266
                                                                                                             // 267
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['mrt:filesaver'] = {};

})();
