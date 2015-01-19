/*
 * ===========================================
 * Java Pdf Extraction Decoding Access Library
 * ===========================================
 *
 * Project Info: http://www.idrsolutions.com
 * Help section for developers at http://www.idrsolutions.com/java-pdf-library-support/
 *
 * (C) Copyright 1997-2014, IDRsolutions and Contributors.
 *
 * This file is part of JPedal
 *
 @LICENSE@
 *
 * ---------------
 * jBook.js
 * ---------------
 */

function d(id) {
    return document.getElementById(id);
}

function divResize(ele, w, h) {
    ele.style.width = "" + w + "px";
    ele.style.height = "" + h + "px";
}

function newDiv(id) {
    var ele = document.createElement("div");
    ele.setAttribute("id", id);
    return ele;
}

function newFrame(id) {
    var ele = document.createElement("iframe");
    ele.setAttribute("id", id);
    return ele;
}

function z(ele, num) {
    ele.style.zIndex = num;
}

function hideVis(ele) {
    ele.style.visibility = "hidden";
}

function showVis(ele) {
    ele.style.visibility = "visible";
}

function noneDisplay(ele) {
    ele.style.display = "none";
}

function inDisplay(ele) {
    ele.style.display = "inherit";
}

function divOriginate(ele, x, y) {
    ele.style.webkitTransformOrigin = x + "px " + y + "px";
    ele.style.transformOrigin = x + "px " + y + "px";
    ele.style.mozTransformOrigin = x + "px " + y + "px";
    ele.style.msTransformOrigin = x + "px " + y + "px";
    ele.style.oTransformOrigin = x + "px " + y + "px";
}
function divMove(ele, x, y) {
    x = parseInt(x);
    y = parseInt(y);
    ele.style.top = y + "px";
    ele.style.left = x + "px";
}

function divTranslate(ele,x,y,zoom){
    ele.style.transform = "translate3d(" + x + "px, " + y + "px, 0px) scale(" + zoom + ")";
    ele.style.webkitTransform = "translate3d(" + x + "px, " + y + "px, 0px) scale(" + zoom + ")";
    ele.style.mozTransform = "translate3d(" + x + "px, " + y + "px, 0px) scale(" + zoom + ")";
    ele.style.msTransform = "translate3d(" + x + "px, " + y + "px, 0px) scale(" + zoom + ")";
    ele.style.oTransform = "translate3d(" + x + "px, " + y + "px, 0px) scale(" + zoom + ")";
}

function pointMove(ele, p) {
    ele.style.left = p.x + "px";
    ele.style.top = p.y + "px";
}

function pointDrag(ele, p) {
    ele.style.transitionProperty = "left";
    ele.style.transitionDuration = "300ms";
    ele.style.transitionTimingFunction = "linear";
    ele.style.left = p.x + "px";
    ele.style.transitionProperty = "top";
    ele.style.transitionDuration = "300ms";
    ele.style.transitionTimingFunction = "linear";
    ele.style.top = p.y + "px";
}

function showDrags() {
    dragElement.style.visibility = "visible";
    clipElement.style.visibility = "visible";
    if (!isMobile){
        d('main').style.overflow = "hidden";
    }
}

function hideDrags() {
    dragElement.style.visibility = "hidden";
    clipElement.style.visibility = "hidden";
    z(d('topLeft'), 11);
    z(d('topRight'), 11);
    z(d('botLeft'), 11);
    z(d('botRight'), 11);
}

function makeOne() {
    z(d('topLeft'), 1);
    z(d('topRight'), 1);
    z(d('botLeft'), 1);
    z(d('botRight'), 1);
}


function hideDragsAnim() {
    var timing = "200ms";
    if (isIE) {
        dragElement.style.visibility = "hidden";
        clipElement.style.visibility = "hidden";
    } else {
        dragElement.style.transitionProperty = "visibility";
        dragElement.style.transitionDuration = timing;
        dragElement.style.transitionTimingFunction = "linear";
        dragElement.style.visibility = "hidden";
        clipElement.style.transitionProperty = "visibility";
        clipElement.style.transitionDuration = timing;
        clipElement.style.transitionTimingFunction = "linear";
        clipElement.style.visibility = "hidden";
    }
}

function rotateSlide(ele, deg) {
    ele.style.transitionProperty = "rotate";
    ele.style.transitionDuration = "1000ms";
    ele.style.transitionTimingFunction = "linear";
    ele.style.transform = 'rotate(' + deg + 'deg)';
    ele.style.webkitTransform = 'rotate(' + deg + 'deg)';
    ele.style.mozTransform = 'rotate(' + deg + 'deg)';
    ele.style.msTransform = 'rotate(' + deg + 'deg)';
    ele.style.oTransform = 'rotate(' + deg + 'deg)';
}


function divTurn(ele, x, y, deg) {
    deg = deg.toFixed(3);
    x = x.toFixed(3);
    y = y.toFixed(3);
    ele.style.transform = "translate3d(" + x + "px, " + y + "px, 1px) rotate(" + deg + "deg)";
    ele.style.webkitTransform = "translate3d(" + x + "px, " + y + "px, 1px) rotate(" + deg + "deg)";
    ele.style.mozTransform = "translate3d(" + x + "px, " + y + "px, 1px) rotate(" + deg + "deg)";
    ele.style.msTransform = "translate3d(" + x + "px, " + y + "px, 1px) rotate(" + deg + "deg)";
    ele.style.oTransform = "translate3d(" + x + "px, " + y + "px, 1px) rotate(" + deg + "deg)";
}

function addCSS(ele, text) {
    var styleAttr = ele.getAttribute("style");
    if (styleAttr != null) {
        ele.setAttribute("style", styleAttr + text);
    } else {
        ele.setAttribute("style", text);
    }
}

function getCompStyle(ele, attr) {
    return window.getComputedStyle(ele, null).getPropertyValue(attr);
}
function getHypot(w, h) {
    return Math.sqrt((w * w) + (h * h));
}
function getRadian(deg) {
    return (deg * Math.PI) / 180;
}
function getDegree(rad) {
    return (rad / Math.PI) * 180;
}
function getFloat(value) {
    var n = parseFloat(value);
    return n === null || isNaN(n) ? 0.0 : n;
}
function Point(x, y) {
    this.x = x;
    this.y = y;
}
function getInt(value) {
    var n = parseFloat(value);
    return n === null || isNaN(n) ? 0.0 : n;
}
function p2p(a, b) {
    return Math.sqrt((a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
}

//user ads
var userTop, userLeft, userRight, userBottom;
//points
var PLT, PRT, PLB, PRB, f, SB, ST;
//drag,clips
var dragElement, clipElement, gradElement, innerClip;
//draggin box
var dlt, drt, drb, dlb;

var fileType = "html";
var imgFileType;
var BOOKWIDTH = 0;
var BOOKHEIGHT = 0;
var CLIPDIFF = 0;
var BY = 8;
var BX = 26;
var screenW = 0;
var isZoomed = false;
var zoomRate = 1;
var currentDrag = 3;
var googletag;
var bookX = 0;
var bookY = 0;
var bgColor = "#5A5A5A";
var boardColor = "#383B3B"//"rgb(65,65,75)";//"#383838";
var bgImgUrl = "assets/bg.png";
var pw = 0;
var ph = 0;
var iter = 15;

var container;
var pages = new Array();
var bookDiv;

var leftDiv;
var rightDiv;
var leftMask;
var rightMask;

var leftSlides;
var rightSlides;
var TH = 50;

var isMobile;
var isIos;
var isTouch = false;
var touchStartX = 0;
var touchStartY = 0;
var lastX = 0;
var lastY = 0;
var toAnimX = 0;
var toAnimY = 0;

var STX = 0;
var STY = 0;
var SBX = 0;
var SBY = 0;
var INRAD = 0;
var OUTRAD = 0;

var nextX = 2;
var pageCount = 0;
var dragBox = -1;
var curRP = 1;
var isTurning = false;
var pageDom = new Array();
var isAnalytics = false;
var adjustSpacing = true;
var tBarH = 50;
var aPrefix;

var isIE = false;
var isSafari = false;

var definedX;
var definedY;
var definedW;
var definedh;
var visibleScreenW;
var leftLoaded = false;
var rightLoaded = false;
var CX = 0;
var CY = 0;
var frameRate = 10;
var speed = 1;

var TBH = 44; //tool bar height;
var minZoom;
var originalWidth;
var isHorizontal = true;
var zoomPoll;
function screenFix(forceResize) {
    if (isMobile) {
        if (isHorizontal) {
            if (window.innerWidth < window.innerHeight) {
                document.body.removeAttribute("style");

                var main = d('main');
                main.removeAttribute("style");
                main.innerHTML = "";

                window.location.reload(false);
            }
        } else {
            if (window.innerWidth > window.innerHeight) {
                document.body.removeAttribute("style");

                var main = d('main');
                main.removeAttribute("style");
                main.innerHTML = "";

                window.location.reload(false);
            } else {
                topMargin = getTopMargin();

                for (var i = 1; i <= pageCount; i++) {
                    if (verticalLoadArr[i]) {
                        d('page' + i).style.marginTop = topMargin + "px";
                    }
                }

            }
        }
        if (!isHorizontal || !forceResize) {
            return;
        }
    }

    divOriginate(d('userRight'), 0, 0);
    divOriginate(container, 0, 0);

    var rightAdW = parseInt(getCompStyle(d('userRight'), "width"));
    var rightAdH = parseInt(getCompStyle(d('userRight'), "Height"));

    var winW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    winW = winW - 10;
    var winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    winH = winH - 10;
    var conW = BOOKWIDTH + BX * 2;
    var conH = (TH + BY) * 2 + BOOKHEIGHT;
    var topH = getInt(getCompStyle(d('userTop'), "height")) + TBH;
    var ratio = Math.min((winW / conW), ((winH - topH) / conH));

    var topW = getInt(getCompStyle(d('userTop'), ("width")));
    if (topW < winW) {
        divMove(d('userTop'), (winW - topW) / 2, TBH);
    } else {
        divMove(d('userTop'), 0, TBH);
    }
    zoomRate = ratio;
    winW = winW - (rightAdW * zoomRate);

    var moveY = topH;
    var moveX = winW / 2;
    if ((ratio * conW) > winW) {
        moveX = 5;
    } else {
        moveX = (winW - (ratio * conW)) / 2 + 5;
    }

    divMove(container, parseInt(moveX), moveY);
    zoomIn(container, zoomRate);
//    divTranslate(container, parseInt(moveX), parseInt(moveY),zoomRate);

    var botW = getInt(getCompStyle(d('userBottom'), ("width")));
    var botY = (topH + conH * zoomRate);
    if (botW < winW) {
        divMove(d('userBottom'), (winW - botW) / 2, botY);
    } else {
        divMove(d('userBottom'), 0, botY);
    }

    if (!isMobile) {
        var percent = Math.floor(zoomRate * 100) + "%";
        d("zoomer").options[0].textContent = percent;
        d("zoomer").selectedIndex = 0;
    }

    minZoom = zoomRate;
    originalWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;

    zoomIn(d('userRight'), 1);
    if (rightAdW > 0) {
        zoomIn(d('userRight'), zoomRate);
        divMove(d('userRight'), moveX + (conW * zoomRate) + 5, moveY + (conH * zoomRate) / 2 - (rightAdH * zoomRate) / 2);
    }

}


var prevZoomW = 0;
function zoomCtrl(method) {

    divOriginate(container, 0, 0);
    var scrollX = window.pageXOffset;
    var scrollY = window.pageYOffset;
    var divs = new Array("userTop", "userBottom", "userLeft", "userRight");
    var topH = 0;
    var topW = 0;
    var botW = 0;
    if (d('userTop') !== null) {
        topH = getInt(getCompStyle(d('userTop'), "height"));
        topW = getInt(getCompStyle(d('userTop'), "width"));
    }
    if (d('userBottom') !== null) {
        botW = getInt(getCompStyle(d('userBottom'), "width"));
    }

    var rightAdW = parseInt(getCompStyle(d('userRight'), "width"));
    var rightAdH = parseInt(getCompStyle(d('userRight'), "Height"));

    var winW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
    winW = winW - 10;
    var winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    winH = winH - 10;
    var conW = BOOKWIDTH + BX * 2;
    var conH = (TH + BY) * 2 + BOOKHEIGHT;

    var ratio = Math.min((winW / conW), ((winH - topH) / conH));
    var beforeZoomH = conH * zoomRate;
    var beforeZoomW = conW * zoomRate;
    if (method === "reset") {
        window.location.reload();
//        window.scrollTo(moveScroll,(scrollY*1.1));
    }
    else if (method === "plus") {
        zoomRate = zoomRate + 0.1;
    }
    else if (method === "minus") {
        if (zoomRate > 0.1) {
            zoomRate = zoomRate - 0.1;
        }
    }
    else {//Leon using this for pinch to zoom
        zoomRate = zoomRate * method;
    }

    if (isMobile && zoomRate < minZoom) {
        zoomRate = minZoom;
    }

    winW = winW - (zoomRate * rightAdW);

    zoomIn(d("container"), zoomRate);

    var afterZoomW = (conW * zoomRate);
    var diffW = ((afterZoomW - winW) / 2);

    var afterZoomH = (conH * zoomRate);
    var diffH = afterZoomH - beforeZoomH;

    var moveX = 0;
    if (afterZoomW > winW) {
        moveX = 5;
        var scrY = scrollY === 0 ? 0 : diffH / 2;
        window.scrollTo(scrollX + diffW - prevZoomW, scrollY + scrY);
        prevZoomW = diffW;
    } else {
        moveX = (winW - afterZoomW) / 2 + 5;
    }
    var moveY = TBH + topH;

    divMove(container, moveX, moveY);

    if (!isMobile) {
        if (d('userBottom') !== null) {
            divMove(d('userBottom'), moveX + (afterZoomW - botW) / 2, (moveY + afterZoomH));
        }
        if (d('userTop') !== null) {
            divMove(d('userTop'), moveX + (afterZoomW - topW) / 2, TBH);
        }

        zoomIn(d('userRight'), 1);
        if (rightAdW > 0) {
            zoomIn(d('userRight'), zoomRate);
            divMove(d('userRight'), moveX + (conW * zoomRate) + 5, moveY + (conH * zoomRate) / 2 - (rightAdH * zoomRate) / 2);
        }
    }

    if (!isMobile) {
        var percent = Math.floor(zoomRate * 100) + "%";
        d("zoomer").options[0].textContent = percent;
        d("zoomer").selectedIndex = 0;
    }

}

var vertGoToPage = function (pg, slide) {
    if (zoom > defaultZoom) {
        zoom = defaultZoom;
        requestAnimationFrame(function () {
            setTransform(0, 0, zoom, true);
            vertGoToPage(pg, slide);
        }, d('main'));
        return;
    }

    if (pg === 0) {
        pg = d('goBtn').selectedIndex + 1;
    }

    if (!verticalLoadArr[pg]) {
        verticalLoadArr[pg] = true;

        var iframe = vertGetIframe(pg);
        container.appendChild(iframe);

        iframe.onload = function () {
            loadNeighbors(pg);
            vertAttachEvents(iframe);
        };
    }

    translateX = -(window.innerWidth * (pg - 1));

    if (slide) {
        container.style.transitionDuration = "200ms";
        container.style.webkitTransitionDuration = "200ms";
        container.style.mozTransitionDuration = "200ms";
        container.style.oTransitionDuration = "200ms";
        container.style.msTransitionDuration = "200ms";
    }

    container.style.transform = "translate3d(" + translateX + "px, 0, 0)";
    container.style.webkitTransform = "translate3d(" + translateX + "px, 0, 0)";
    container.style.mozTransform = "translate3d(" + translateX + "px, 0, 0)";
    container.style.oTransform = "translate3d(" + translateX + "px, 0, 0)";
    container.style.msTransform = "translate3d(" + translateX + "px, 0, 0)";


    var transitionEnd = function () {
        d('goBtn').selectedIndex = pg - 1;
        pageNo = pg;
        curRP = pageNo % 2 === 0 ? pageNo + 1 : pageNo
        window.location.hash = "page=" + String(curRP);
        updateTweet();
        vertIsMoving = false;
        loadNeighbors(pg);
        container.style.transitionDuration = "";
        container.style.webkitTransitionDuration = "";
        container.style.mozTransitionDuration = "";
        container.style.oTransitionDuration = "";
        container.style.msTransitionDuration = "";
        container.removeEventListener("transitionend", transitionEnd, false);
        container.removeEventListener("webkitTransitionEnd", transitionEnd, false);

//        for (var i = 1; i <= pageCount; i++) {
//            if (verticalLoadArr[i] && (i < pageNo - 1 || i > pageNo + 1)) {
////                verticalLoadArr[i] = false;
//                var rm = d('page' + i);
////                rm.src="";//.parentNode.removeChild(rm);
//            }
//        }
    };

    if (slide) {
        container.addEventListener("transitionend", transitionEnd, false);
        container.addEventListener("webkitTransitionEnd", transitionEnd, false);
    } else {
        transitionEnd();
    }

};


var vertGetIframe = function (pg) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("id", "page" + pg);
    iframe.setAttribute("src", pg + ".html");
    iframe.style.width = BOOKWIDTH / 2 + "px";
    iframe.style.height = BOOKHEIGHT + "px";
    iframe.style.border = "0";
    offsets[pg] = (((window.innerWidth) * (pg - 1)) + leftMargin);
    iframe.style.transform = "translate3d(" + (((window.innerWidth) * (pg - 1)) + leftMargin) + "px, 0, 0) scale(" + ratio + ")";
    iframe.style.webkitTransform = "translate3d(" + (((window.innerWidth) * (pg - 1)) + leftMargin) + "px, 0, 0) scale(" + ratio + ")";
    iframe.style.mozTransform = "translate3d(" + (((window.innerWidth) * (pg - 1)) + leftMargin) + "px, 0, 0) scale(" + ratio + ")";
    iframe.style.oTransform = "translate3d(" + (((window.innerWidth) * (pg - 1)) + leftMargin) + "px, 0, 0) scale(" + ratio + ")";
    iframe.style.msTransform = "translate3d(" + (((window.innerWidth) * (pg - 1)) + leftMargin) + "px, 0, 0) scale(" + ratio + ")";
    iframe.style.transformOrigin = "top left";
    iframe.style.webkitTransformOrigin = "top left";
    iframe.style.mozTransformOrigin = "top left";
    iframe.style.oTransformOrigin = "top left";
    iframe.style.msTransformOrigin = "top left";
    iframe.style.marginTop = topMargin + "px";
    iframe.style.position = "absolute";
//    iframe.style.webkitBackfaceVisibility = "hidden";
//    iframe.style.webkitPerspective = "1000";
//    iframe.style.boxShadow = "0 0 35px 0px #333333";

    return iframe;
};

var vertAttachEvents = function (el) {
    el.contentWindow.document.addEventListener("touchstart", vertTouchStart);
    el.contentWindow.document.addEventListener("touchmove", vertTouchMove);
    el.contentWindow.document.addEventListener("touchend", vertTouchEnd);
};
var loadNeighbors = function (houseNo) {
    var leftNo = houseNo - 1;
    if (leftNo >= 1 && !verticalLoadArr[leftNo]) {
        var left = vertGetIframe(leftNo);
        container.appendChild(left);
        verticalLoadArr[leftNo] = true;

        left.onload = function () {
            vertAttachEvents(d('page' + leftNo));
        };
    }
    var rightNo = houseNo + 1;
    if (rightNo <= pageCount && !verticalLoadArr[rightNo]) {
        var right = vertGetIframe(rightNo);
        container.appendChild(right);
        verticalLoadArr[rightNo] = true;

        right.onload = function () {
            vertAttachEvents(d('page' + rightNo));
        };
    }
};

var canSlide = false;
var isSliding = false;
var translateX;
var vertTouchX;
var vertIsMoving = false;
var vertTouchStartTime;
var vertTouchStartX, vertTouchStartY, vertTouchLastX, vertTouchLastY;
var lastScrlX, lastScrlY, tempScrlX, tempScrlY, tempThen, then, poll, momentumX, momentumY, isMomentumScrolling, stopMomentumScrolling, isSingleTouchDrag;

var vertTouchStart = function (event) {
    if (event.touches.length === 1 && !vertIsMoving && zoom === 1) {
        vertTouchX = event.touches[0].screenX;
        vertTouchStartX = event.touches[0].screenX;
        vertTouchStartY = event.touches[0].screenY;
        vertTouchLastX = vertTouchStartX;
        vertTouchLastY = vertTouchStartY;
        canSlide = true;

        vertTouchStartTime = Date.now();
    }

    if (isMomentumScrolling) {
        stopMomentumScrolling = true;
    }

    if (event.touches.length === 1 && zoom > 1) {
//        var now = new Date().getTime();
//        lastTap = lastTap || now + 1;
//        var timeDiff = now - lastTap;
//        var xDiff = Math.abs(lastTouchX - event.touches[0].screenX);
//        var yDiff = Math.abs(lastTouchY - event.touches[0].screenY);
//        if (timeDiff<500 && timeDiff > 0 && xDiff < 50 && yDiff < 50) {
//            //Double tap
//
//            var scale;
//            if (zoom > defaultZoom) {
//                scale = defaultZoom / zoom;//Default zoom
//            } else {
//                scale = (defaultZoom * 2) / zoom;//Default zoom * 2
//            }
//
//            var centerX = window.innerWidth / 2;
//            var centerY = 0//NAV_HEIGHT + ((window.innerHeight - NAV_HEIGHT) / 2);
//            scrlLeft = scrlLeft + (centerX - lastTouchX);
//            scrlTop = scrlTop + (centerY - lastTouchY);
//
//            var x = -scrlLeft + centerX;
//            scrlLeft = scrlLeft - (((x * scale) - x));
//            var y = -scrlTop + centerY;
//            scrlTop = scrlTop - (((y * scale) - y));
//            zoom = zoom * scale;
//            checkBounds();
//
//            setTransform(scrlLeft, scrlTop, zoom, false);
//
//
//            lastTap = 0;
//
//        } else {
//            lastTap = now;
//        }

        lastTouchX = event.touches[0].screenX;
        lastTouchY = event.touches[0].screenY;
        allowSingleTouchDrag = true;


        lastScrlX = scrlLeft;
        lastScrlY = scrlTop;
        tempScrlX = lastScrlX;
        tempScrlY = lastScrlY;
        tempThen = Date.now();
        then = Date.now();

        if (!poll) {
            poll = setInterval(
                function () {
                    lastScrlX = tempScrlX;
                    lastScrlY = tempScrlY;
                    tempScrlX = scrlLeft;
                    tempScrlY = scrlTop;
                    then = tempThen;
                    tempThen = Date.now();
                }, 200);
        }
    } else {
//        touchTimer = null;
    }

    if (event.touches.length === 2 && !isSliding) {
        wasPinchZoom = true;
        allowSingleTouchDrag = false;

        var x1 = event.touches[0].screenX;
        var x2 = event.touches[1].screenX;
        var y1 = event.touches[0].screenY;
        var y2 = event.touches[1].screenY;

        pythag = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));

        midX = x1 - ((x1 - x2) / 2);//note duplicate in pinch zoom
        midY = y1 - ((y1 - y2) / 2);//note duplicate in pinch zoom
    }
};
var vertTouchMove = function (event) {

    if (event.touches.length === 1 && canSlide && zoom === 1) {
        // Zoomed out, sliding to next or prev page

        event.preventDefault();
        event.stopPropagation();

        isSliding = true;

        var diff = vertTouchX - event.touches[0].screenX;
        if (diff === 0) {
            return;
        }

        vertTouchX = event.touches[0].screenX;
        vertTouchLastX = event.touches[0].screenX;
        vertTouchLastY = event.touches[0].screenY;

        translateX = translateX - diff;
        container.style.transform = "translate3d(" + translateX + "px, 0, 0)";
        container.style.webkitTransform = "translate3d(" + translateX + "px, 0, 0)";
        container.style.mozTransform = "translate3d(" + translateX + "px, 0, 0)";
        container.style.oTransform = "translate3d(" + translateX + "px, 0, 0)";
        container.style.msTransform = "translate3d(" + translateX + "px, 0, 0)";
    } else if (event.touches.length === 1) {
        // Zoomed in, panning around

        event.preventDefault();
        event.stopPropagation();

        if (allowSingleTouchDrag) {
//            if (isIos) {
//                needsRerender = true;
//            }
//
            isSingleTouchDrag = true;

            var tapX = event.touches[0].screenX;
            var tapY = event.touches[0].screenY;

            var diffX = tapX - lastTouchX;
            var diffY = tapY - lastTouchY;


            scrlLeft = scrlLeft + diffX;
            scrlTop = scrlTop + diffY;
            lastTouchX = tapX;
            lastTouchY = tapY;

            checkBounds();

            requestAnimationFrame(function () {
                setTransform(round(scrlLeft), round(scrlTop), zoom, true);
            }, d('main'));
        }

    } else if (event.touches.length === 2) {
        // Pinch zooming

        event.preventDefault();
        event.stopPropagation();

        if (vertIsMoving || !event.cancelable || !wasPinchZoom || isSliding) {
            return;
        }

        count = (count + 1) % 2;
        if (count === 1) {
            return;
        }

        var x1 = event.touches[0].screenX;
        var x2 = event.touches[1].screenX;
        var y1 = event.touches[0].screenY;
        var y2 = event.touches[1].screenY;

        var difff = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
        var scale = difff / pythag;

        if (zoom * scale < defaultZoom) {
            scale = 1;
            zoom = defaultZoom;
        }
        if (zoom * scale > 4) {
            scale = 1;
        }

        zoom = zoom * scale;

        var newMidX = x1 - ((x1 - x2) / 2);//note duplicate in 2touch start
        var newMidY = y1 - ((y1 - y2) / 2);//note duplicate in 2touch start

        scrlLeft = scrlLeft + newMidX - midX;
        scrlTop = scrlTop + newMidY - midY;

        var x = -scrlLeft + newMidX;
        scrlLeft = scrlLeft - (((x * scale) - x));
        var y = -scrlTop + newMidY;
        scrlTop = scrlTop - (((y * scale) - y));

        checkBounds();

        midX = newMidX;
        midY = newMidY;

        requestAnimationFrame(function () {
            setTransform(round(scrlLeft), round(scrlTop), zoom, true);
        }, d('main'));

        pythag = difff;

    }

};

var checkBounds = function () {
    if (scrlLeft > 0) {
        scrlLeft = 0;
        momentumX = 0;
    }
    if (scrlTop > 0) {
        scrlTop = 0;
        momentumY = 0;
    }

    var pgWidthOrig = BOOKWIDTH / 2 * ratio;
    var pgWidth = pgWidthOrig * zoom;
    if (scrlLeft < pgWidthOrig - pgWidth) {
        scrlLeft = pgWidthOrig - pgWidth;
        momentumX = 0;
    }

    var pgHeightOrig = BOOKHEIGHT * ratio;
    var pgHeight = pgHeightOrig * zoom;
    if (scrlTop < pgHeightOrig - pgHeight) {
        scrlTop = pgHeightOrig - pgHeight;
        momentumY = 0;
    }
};

var round = function (toRound) {
    return Math.round(toRound * 2) / 2;
};

var setTransform = function (x, y, scale, hardwareAccelerate) {
    "use strict";
    var transform;
    if (hardwareAccelerate) {
        transform = "translate3d(" + (x + offsets[pageNo]) + "px, " + y + "px, 0) scale(" + (scale * ratio) + ")";
    } else {
        transform = "translateX(" + (x + offsets[pageNo]) + "px) translateY(" + y + "px) scale(" + (scale * ratio) + ")";
    }

    var page = d('page' + pageNo);
    page.style.transform = transform;
    page.style.webkitTransform = transform;
    page.style.msTransform = transform;
    page.style.MozTransform = transform;
    page.style.OTransform = transform;

};

var vertTouchEnd = function (event) {

    if (canSlide && isSliding) {
        canSlide = false;
        var pg = pageNo;
        var swipeDetected = false;
        //Detect a "swipe"
        if (Date.now() - vertTouchStartTime < 300) {
            var diffX = vertTouchStartX - vertTouchLastX;
            var diffY = vertTouchStartY - vertTouchLastY;
            if (Math.abs(diffX) > 100 && Math.abs(diffX) > Math.abs(diffY) * 0.25) {
                swipeDetected = true;
                if (diffX > 0) {
                    if (pageNo < pageCount) {
                        pg = pageNo + 1;
                    }
                } else {
                    if (pageNo > 1) {
                        pg = pageNo - 1;
                    }
                }
            }
        }

        //If no swipe then check current position of the pages
        if (!swipeDetected) {
            var mid = -(window.innerWidth) * (pageNo - 1);
            if (translateX > mid + (window.innerWidth / 2)) {
                if (pageNo > 1) {
                    pg = pageNo - 1;
                }
            } else if (translateX < mid - (window.innerWidth / 2)) {
                if (pageNo < pageCount) {
                    pg = pageNo + 1;
                }
            }
        }

        if (pg != pageNo) {
            vertIsMoving = true;
        }
        vertGoToPage(pg, true);
    }

    if (event.touches.length === 0) {
        isSliding = false;
    }

    clearInterval(poll);
    poll = null;

    if (isSingleTouchDrag) {
        isSingleTouchDrag = false;

        var timeTaken = Date.now() - then;
        var diffX = lastScrlX - scrlLeft;
        var diffY = lastScrlY - scrlTop;
        momentumX = diffX / (timeTaken / 16);
        momentumY = diffY / (timeTaken / 16);

        if (Math.abs(momentumX) < 0.5) {
            momentumX = 0;
        }
        if (Math.abs(momentumY) < 0.5) {
            momentumY = 0;
        }

        if (momentumX !== 0 || momentumY !== 0) {
            window.requestAnimationFrame(applyMomentum, d('main'));
        }
    }

};

var applyMomentum = function () {
    isMomentumScrolling = true;

    if (!stopMomentumScrolling && (momentumX < -0.5 || momentumX > 0.5 || momentumY < -0.5 || momentumY > 0.5)) {
        scrlLeft -= momentumX;
        scrlTop -= momentumY;

        momentumX = momentumX * 0.95;
        momentumY = momentumY * 0.95;

        checkBounds();

        setTransform(round(scrlLeft), round(scrlTop), zoom, true);

        window.requestAnimationFrame(applyMomentum, d('main'));

    } else {
        isMomentumScrolling = false;
//        if (!stopMomentumScrolling) {
//            //Don't rerender if we were forced to stop scrolling (user scrolled again)
//            var currentEvent = eventCounter;
//            setTimeout(function() {
//                //Make sure no other events have occurred since we started the timer
//                if (eventCounter === currentEvent) {
//                    forceRerender();
//                }
//            }, 200);
//        }
        stopMomentumScrolling = false;
    }
};

var pythag,
    width,
    zoom = 1,
    defaultZoom = 1,
    scrlTop = 0,
    scrlLeft = 0,
    midX,
    midY,
    count = 0,
    wasPinchZoom,
    zoomCanceled = true,
    offsets = [],
    lastTouchX,
    lastTouchY,
    allowSingleTouchDrag;

var verticalFirstPage;
var verticalLoadArr = [];
var leftMargin;
var topMargin;
var ratio;
var pageNo;
var container;
var resetToVertical = function () {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');

    getJumpQuery();

    pageNo = curRP;
    if (pageNo != 1) {
        pageNo = pageNo - 1;
    }

    makeMenuBar();

    d('menuBar').style.width = "400px";

    var goBtn = d('goBtn');
    goBtn.textContent = "";
    for (var i = 1; i <= pageCount; i++) {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerText = String(i);
        goBtn.appendChild(opt);
    }
    goBtn.selectedIndex = pageNo - 1;
    goBtn.onchange = function () {
        vertGoToPage(0);
    };
    d('next').onclick = function () {
        if (pageNo < pageCount)
            vertGoToPage(pageNo + 1, true);
    };
    d('prev').onclick = function () {
        if (pageNo > 1)
            vertGoToPage(pageNo - 1, true);
    };
    d('backward').onclick = function () {
        if (pageNo != 1)
            vertGoToPage(1, true);
    };
    d('forward').onclick = function () {
        if (pageNo < pageCount)
            vertGoToPage(pageCount, true);
    };

    var main = d('main');
    main.removeAttribute("style");
    main.innerHTML = "";

    main.style.position = "absolute";
    main.style.left = "0";
    main.style.right = "0";
    main.style.top = "0";//"40px";
    main.style.bottom = "0";
    main.style.overflow = "hidden";

    container = document.createElement("div");
    container.setAttribute("id", "container");


    container.style.webkitBackfaceVisibility = "hidden";
    container.style.webkitPerspective = "1000";

    topMargin = getTopMargin();

    for (var i = 1; i <= pageCount; i++) {
        verticalLoadArr[i] = false;
    }

    verticalFirstPage = pageNo;
    setTimeout(function () {
        vertGoToPage(verticalFirstPage, false);
    }, 0);

    main.appendChild(container);

};

var getTopMargin = function() {
    var ratioX = (window.innerWidth - 20) / (BOOKWIDTH / 2);
    var ratioY = (window.innerHeight - TBH - 20) / BOOKHEIGHT;

    if (ratioX < ratioY) {
        ratio = ratioX;
        leftMargin = 10;
    } else {
        ratio = ratioY;

        var pgWidth = BOOKWIDTH / 2 * ratio;
        var diff = (window.innerWidth - 20) - pgWidth;
        leftMargin = diff / 2 + 10;
    }

    topMargin = ((window.innerHeight - TBH) - (BOOKHEIGHT * ratio)) / 2;
    topMargin += TBH;//40 is size menu bar
    return topMargin;
};


window.onresize = function () {
    screenFix(false);
};

function makeAjaxPage(type, pageTotal, w, h, prefix, imgType) {
    fileType = type;
    imgFileType = imgType;
    isAjax = true;
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    pageCount = pageTotal;

    addCSS(d("main").parentNode, "background-color:" + bgColor + ";");

    BOOKWIDTH = w * 2;
    BOOKHEIGHT = h;

    if (isMobile) {
        if (window.innerWidth < window.innerHeight) {
            isHorizontal = false;
            resetToVertical();
            return;
        }
    }

    pageDom[0] = "";
    aPrefix = prefix;
    userTop = d('userTop');
    userRight = d('userRight');
    userBottom = d('userBottom');
    userLeft = d('userLeft');

    addCSS(userTop, "position:absolute;z-index:10;");
    addCSS(userRight, "position:absolute;z-index:10;");
    addCSS(userBottom, "position:absolute;z-index:10;");
    addCSS(userLeft, "position:absolute;z-index:10;");

    definedX = getInt(getCompStyle(userLeft, "width"));
    definedY = tBarH + getInt(getCompStyle(userTop, "height"));

    if (aPrefix != null && aPrefix.toString().length > 0) {
        isAnalytics = true;
    }

    if (navigator.appName == 'Microsoft Internet Explorer') {
        isIE = true;
        frameRate = 5;
        speed = 1;
    }
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1 && !(ua.indexOf('chrome') > -1)) {
        isSafari = true;
        frameRate = 25;
        speed = 1;
    }
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        frameRate = 25;
        speed = 10;
    }
    isTouch = 'ontouchstart' in window;
    if (isTouch) {
        iter = 25;
    }
    definedW = w;
    definedH = h;

    makeMenuBar();

    addCSS(d('main'), "position:absolute;top:0;left:0;right:0;bottom:0;");
    document.onkeydown = keyNav;

    makeBook();
}

var makeMenuBar = function() {

    if (!isMobile) {
        var zoomMinus = document.createElement("img");
        zoomMinus.setAttribute('id', 'zoomPlus');
        zoomMinus.setAttribute('src', 'assets/pgZoomOut.png');
        zoomMinus.setAttribute("onclick", "zoomCtrl('minus')");

        addCSS(zoomMinus, "margin-right:10px;cursor:pointer;border: solid 1px #fff;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;vertical-align:bottom;height:32px;");

        var zoomer = document.createElement("select");
        zoomer.setAttribute('id', 'zoomer');
        zoomer.innerHTML = "<option value='100'>100%</option><option value='reset'>Reset</option>";
        addCSS(zoomer, "color:#383B3B;margin-right:10px;background-color:" + "#B0B0B0" + ";border: solid 2px #fff;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;");
        //    reset.setAttribute("onclick", "zoomCtrl('reset')");
        divResize(zoomer, 75, 32);
        zoomer.onchange = function () {
            if (this.selectedIndex === 1) {
                zoomCtrl("reset");
            }
        };

        var zoomPlus = document.createElement("img");
        zoomPlus.setAttribute('id', 'zoomPlus');
        zoomPlus.setAttribute('src', 'assets/pgZoomIn.png');
        zoomPlus.setAttribute("onclick", "zoomCtrl('plus')");
        addCSS(zoomPlus, "margin-right:15px;cursor:pointer;border: solid 1px #fff;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;vertical-align:bottom;height:32px;");

    }

    var thumbBtn = document.createElement("img");
    thumbBtn.setAttribute('id', 'thumbBtn');
    thumbBtn.setAttribute('title', 'Thumbnails view');
    thumbBtn.setAttribute('src', 'assets/pgThumbs.png');
    thumbBtn.setAttribute("onclick", "handleThumbnail()");
    addCSS(thumbBtn, "margin-right:10px;cursor:pointer;border: solid 1px #fff;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;vertical-align:bottom;height:32px;");

    var backward = document.createElement("img");
    backward.setAttribute('id', 'backward');
    backward.setAttribute('src', 'assets/pgBegin.png');
    backward.setAttribute('title', 'Go To The First Page');
    addCSS(backward, "margin-right:10px;cursor:pointer;border: solid 1px #fff;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;vertical-align:bottom;height:32px;");
    backward.onclick = function (e) {
        turnFirst(e);
    };

    var prev = document.createElement("img");
    prev.setAttribute('id', 'prev');
    prev.setAttribute('src', 'assets/pgPrev.png');
    prev.setAttribute('title', 'Go To Previous Page');
    addCSS(prev, "margin-right:10px;cursor:pointer;border: solid 1px #fff;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;vertical-align:bottom;height:32px;");
    prev.onclick = function (e) {
        turnPrev(e);
    };

    var goBtn = document.createElement("select");
    goBtn.setAttribute('id', 'goBtn');
    var pageIter = pageCount / 2;

    for (var p = 0; p <= pageIter; p++) {
        var pString;
        if (p === 0) {
            pString = 1;
        }
        else if (p === pageIter) {
            pString = p * 2;
        } else {
            pString = p * 2 + "-" + (p * 2 + 1);
        }
        var opt = document.createElement("option");
        opt.setAttribute("value", pString);
        opt.textContent = pString;
        goBtn.appendChild(opt);
    }
    goBtn.setAttribute("onchange", "goToPage()");
    addCSS(goBtn, "margin-right:5px;border: solid 2px #fff;background-color:" + "#B0B0B0" + ";color:#383B3B;text-align:center");
    addCSS(goBtn, "-webkit-border-radius: 6px ;-moz-border-radius: 6px;border-radius: 6px;");
    divResize(goBtn, 75, 32);

    var countDiv = document.createElement("span");
    addCSS(countDiv, "color:white;margin-right:5px;");
    countDiv.innerHTML = "/ " + pageCount;

    var next = document.createElement("img");
    next.setAttribute('id', 'next');
    next.setAttribute('src', 'assets/pgNext.png');
    next.setAttribute('title', 'Go To Next Page');
    addCSS(next, "margin-right:10px;cursor:pointer;border: solid 1px #fff;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;vertical-align:bottom;height:32px;");
    next.onclick = function (e) {
        turnNext(e);
    };

    var forward = document.createElement("img");
    forward.setAttribute('id', 'forward');
    forward.setAttribute('src', 'assets/pgLast.png');
    forward.setAttribute('title', 'Go To The Last Page');
    addCSS(forward, "margin-right:10px;cursor:pointer;border: solid 1px #fff;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;vertical-align:bottom;height:32px;");
    forward.onclick = function (e) {
        turnLast(e);
    };

    var shareBtn = document.createElement("img");
    shareBtn.setAttribute('id', 'shareBtn');
    shareBtn.setAttribute('src', 'assets/pgShare.png');
    shareBtn.setAttribute('title', 'Share This Page');
    addCSS(shareBtn, "margin-right:10px;cursor:pointer;border: solid 1px #fff;-webkit-border-radius: 5px;-moz-border-radius:5px;border-radius:5px;vertical-align:bottom;height:32px;");

    shareBtn.onclick = handleShareMenu;

    var tweetDiv = newDiv("tweetDiv");
    addCSS(tweetDiv, "display:block;");
    var facebookDiv = newDiv("facebookDiv");
    addCSS(facebookDiv, "display:block;");
    var googleDiv = newDiv("googleDiv");
    addCSS(googleDiv, "display:block");
    var linkedDiv = newDiv("linkedDiv");
    addCSS(linkedDiv, "display:block;");
    linkedDiv.innerHTML = "<a><img src='http://www.jpedal.org/suda/icons/bLinkedIn.jpg'> linkedin</a>";

    var shareMenu = newDiv("shareMenu");
    addCSS(shareMenu, "position:absolute;width:60px;background-color:#E8E8E8;font-weight:bold;width:100px;padding:5px;opacity:0.9;display:none;");
    addCSS(shareMenu, "margin-right:10px;border-style:solid;border:solid 2px #fff; -webkit-border-radius:6px; -moz-border-radius: 6px;border-radius: 6px;");
    shareMenu.appendChild(tweetDiv);
    shareMenu.appendChild(facebookDiv);
    shareMenu.appendChild(googleDiv);
    shareMenu.appendChild(linkedDiv);

    var menuBar = newDiv('menuBar');

    var menuBarDiv = newDiv('menuBarDiv');
    menuBarDiv.appendChild(menuBar);
    addCSS(menuBarDiv, "position:fixed;padding:5px;z-index:20;background-image:url('assets/nav.png');width:100%;");
    divMove(menuBarDiv, 0, 0);


    if (d('userImageLink') != null) {
        var imageLink = d('userImageLink').innerHTML;
        var webLink = d('userWebLink').innerHTML;
        var imageRef = document.createElement("a");
        imageRef.setAttribute("href", webLink);
        imageRef.setAttribute("target", "_blank");
        imageRef.innerHTML = "<img src='" + imageLink + "' id='userImg' style='position:absolute;left:5px;height:30px;top:5px;'/>";
        menuBarDiv.appendChild(imageRef);
//        alert(getCompStyle(userImage,"height"));
    }

    //add menus to menu item;
    var menuArr;
    if (isMobile) {
        menuArr = [thumbBtn,shareBtn,shareMenu, backward, prev, goBtn, countDiv, next, forward];
    } else {
        menuArr = [thumbBtn,shareBtn,shareMenu, zoomMinus, zoomer, zoomPlus, backward, prev, goBtn, countDiv, next, forward]
    }
    for (var z = 0; z < menuArr.length; z++) {
        menuBar.appendChild(menuArr[z]);
    }

    var menuWidth = isMobile ? 380 : 560;
    addCSS(menuBar, "vertical-align: middle;position:relative;margin: 0 auto;font-family:Arial;font-size:14px;width:" + menuWidth + "px;");


    var tw = getInt(window.getComputedStyle(menuBar, null).getPropertyValue("height"));
    d('main').parentNode.appendChild(menuBarDiv);
};

function makeBook() {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var x = definedX;
    var y = 0;//definedY;
    visibleScreenW = getInt(getCompStyle(d('main'), "width"));

    var thumbnailDiv = newDiv('thumbnailDiv');
    addCSS(thumbnailDiv, "overflow-y:scroll;z-index:20;position:fixed;top:" + TBH + "px;left:-200px;width:200px;height:95%;background-color:black;opacity:0.9;");
    document.body.appendChild(thumbnailDiv);

    CLIPDIFF = BOOKWIDTH / 2;

    bookY = y + BY;
    pw = BOOKWIDTH / 2;
    ph = BOOKHEIGHT;

    leftDiv = newFrame('leftDiv');
    leftDiv.scrolling = "no";
    leftDiv.onload = function (e) {
        leftLoaded = true;
        hideTurns();
    };
    addCSS(leftDiv, "position:absolute;background-color:" + boardColor + ";overflow:hidden;");
//    addCSS(leftDiv, "border-right:solid 10px" + boardColor + ";");
    divResize(leftDiv, (BOOKWIDTH / 2), BOOKHEIGHT);
    divMove(leftDiv, BX, BY + TH);

    leftMask = newDiv('leftMask');
    addCSS(leftMask, "position:absolute;overflow:hidden;z-index:-4;");
    divResize(leftMask, (BOOKWIDTH / 2), BOOKHEIGHT);
    divMove(leftMask, BX, BY + TH);

    rightDiv = newFrame('rightDiv');
    rightDiv.scrolling = "no";
    rightDiv.onload = function (e) {
        rightLoaded = true;
        hideTurns();
    };

    var middleDiv = newDiv('middleDiv');
    addCSS(middleDiv, "position:absolute;border:solid #5A5A5A 0.5px;box-shadow:1px 1px 50px 8px #5A5A5A;");
    divResize(middleDiv, 0, BOOKHEIGHT);
    divMove(middleDiv, BX + (BOOKWIDTH / 2), BY + TH);

    addCSS(rightDiv, "position:absolute;overflow:hidden;");//;
//    addCSS(rightDiv, "border-left:solid 2px " + boardColor + ";");
    divResize(rightDiv, (BOOKWIDTH / 2), BOOKHEIGHT);
    divMove(rightDiv, BX + (BOOKWIDTH / 2), BY + TH);

    rightMask = newDiv('rightMask');
    addCSS(rightMask, "position:absolute;overflow:hidden;z-index:-4;");
    divResize(rightMask, (BOOKWIDTH / 2), BOOKHEIGHT);
    divMove(rightMask, BX + (BOOKWIDTH / 2), BY + TH);

    leftSlides = newDiv("leftSlides");
    addCSS(leftSlides, "position:absolute;background-color:" + boardColor + ";z-index:20;");
    addCSS(leftSlides, "-webkit-border-top-left-radius: 9px;-moz-border-radius-topleft: 9px;border-top-left-radius: 9px;");
    addCSS(leftSlides, "-webkit-border-bottom-left-radius: 9px;-moz-border-radius-bottomleft: 9px;border-bottom-left-radius:9px;");
    divResize(leftSlides, BX, BOOKHEIGHT + (BY * 2));
    divMove(leftSlides, 0, TH);

    rightSlides = newDiv("rightSlides");
    addCSS(rightSlides, "position:absolute;background-color:" + boardColor + ";z-index:20;");
    addCSS(rightSlides, "-webkit-border-top-right-radius: 9px;-moz-border-radius-topright: 9px;border-top-right-radius: 9px;");
    addCSS(rightSlides, "-webkit-border-bottom-right-radius: 9px;-moz-border-radius-bottomright: 9px;border-bottom-right-radius:9px;");
    divResize(rightSlides, BX, BOOKHEIGHT + (BY * 2));
    divMove(rightSlides, BOOKWIDTH + BX, TH);

    var topLeft = newDiv("topLeft");
    addCSS(topLeft, "position:absolute;background-color:" + boardColor + ";");
    divMove(topLeft, BX, TH);
    divResize(topLeft, BOOKWIDTH / 2, BY);

    var topRight = newDiv("topRight");
    addCSS(topRight, "position:absolute;background-color:" + boardColor + ";");
    divMove(topRight, BX + BOOKWIDTH / 2, TH);
    divResize(topRight, BOOKWIDTH / 2, BY);

    var botLeft = newDiv("botLeft");
    addCSS(botLeft, "position:absolute;background-color:" + boardColor + ";");
    divMove(botLeft, BX, TH + BOOKHEIGHT + BY);
    divResize(botLeft, BOOKWIDTH / 2, BY);

    var botRight = newDiv("botRight");
    addCSS(botRight, "position:absolute;background-color:" + boardColor + ";");
    divMove(botRight, BX + BOOKWIDTH / 2, TH + BOOKHEIGHT + BY);
    divResize(botRight, BOOKWIDTH / 2, BY);

    clipElement = newDiv("clip");
    dragElement = newDiv("drag");
    gradElement = newDiv("grad");
    clipContent = newDiv("clipContent");
    innerClip = newDiv("innerClip");

    addCSS(dragElement, "position:absolute;z-index:3;box-shadow:0px 0px 10px #888888;background-color:#ffffff;");

    addCSS(clipElement, "position:absolute;background-color:" + bgColor + ";overflow:hidden;z-index:4;box-shadow:0px 0px 100px #5A5A5A;");
    addCSS(innerClip, "position:relative;background-color:" + boardColor + ";overflow:hidden;padding-top:" + BY + "px;");
    addCSS(innerClip, "-webkit-border-top-right-radius: 9px;-moz-border-radius-topright: 9px;border-top-right-radius: 9px;");
    addCSS(innerClip, "-webkit-border-bottom-right-radius: 9px;-moz-border-radius-bottomright: 9px;border-bottom-right-radius:9px;");

    addCSS(clipContent, "background-color:white;overflow:hidden;box-shadow:0px 0px 5px #888888;");
    divResize(dragElement, (BOOKWIDTH / 2), BOOKHEIGHT);
    divResize(clipElement, ((BOOKWIDTH / 2) + 2 * CLIPDIFF), (BOOKHEIGHT + 2 * CLIPDIFF));
    divResize(innerClip, (BOOKWIDTH / 2) + BX, BOOKHEIGHT + BY);
    divResize(clipContent, (BOOKWIDTH / 2), BOOKHEIGHT);

    innerClip.appendChild(clipContent);
    clipElement.appendChild(innerClip);

    makeInvisible(clipElement, false);
    makeInvisible(dragElement, false);

    container = d("container");
    divResize(container, BOOKWIDTH + BX * 2, (TH + BY) * 2 + BOOKHEIGHT);
    addCSS(container, "position:absolute;background-color:" + bgColor + ";overflow:hidden;");

    //append to container
    var elems = [leftDiv, rightDiv, middleDiv, rightMask, leftMask, dragElement, clipElement,
        topLeft, topRight, leftSlides, rightSlides, botLeft, botRight];
    for (var a = 0; a < elems.length; a++) {
        container.appendChild(elems[a]);
    }

//    if(isSafari){
//        var safariArr = [topLeft,topRight,botLeft,botRight,rightSlides,leftSlides];
//        for(var i=0;i<safariArr.length;i++){
//            safariArr[i].style.visibility="hidden";
//        }
//    }

    var botW = getInt(window.getComputedStyle(d('userBottom'), null).getPropertyValue("width"));
    var contH = (TH + BY) * 2 + BOOKHEIGHT + CY;
    if (botW < winW) {
        divMove(d('userBottom'), (winW - botW) / 2, contH * zoomRate);
    } else {
        divMove(d('userBottom'), 0, contH * zoomRate);
    }

    PLT = new Point(BX, BY + TH);
    PRT = new Point(PLT.x + BOOKWIDTH, PLT.y);
    PLB = new Point(PLT.x, PLT.y + BOOKHEIGHT);
    PRB = new Point(PRT.x, PLT.y + BOOKHEIGHT);

    dlt = newDiv("dlt");
    dlb = newDiv("dlb");
    drt = newDiv("drt");
    drb = newDiv("drb");
    var corners = [dlt, dlb, drt, drb];
    for (var a = 0; a < corners.length; a++) {
        var ele = corners[a];
        if (isIE || isTouch) {
            addCSS(ele, "position:absolute;background-color:pink;opacity:0.1;z-index:10;");
        }
        else {
            addCSS(ele, "position:absolute;z-index:10;background-color:pink;opacity:0.1;");
        }
        divResize(ele, 100, 100);
        container.appendChild(ele);
    }

    pointMove(dlt, PLT);
    divMove(dlb, PLB.x, PLB.y - 100);
    divMove(drt, PRT.x - 100, PRT.y);
    divMove(drb, PRB.x - 100, PRB.y - 100);


    addListeners();

    updateTweet();
    getJumpQuery();

    getPage(rightDiv, curRP);
    getPage(leftDiv, curRP - 1);
    updateSlides();

    window.setTimeout(function () {
        screenFix(true);

        zoomPoll = setInterval(function() {
            //Fix for double tapping on iframes causing zoom despite meta viewport being set.
            if (isHorizontal) {
                var curWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
                if (curWidth > originalWidth) {
                    zoomCtrl(0);
                }
            } else {
                clearInterval(zoomPoll);
            }
        }, 500);
    }, 1);

    if (isAnalytics && _gaq != null) {
        var curView = aPrefix + "/" + (curRP - 1) + (curRP <= pageCount ? ("-" + curRP) : "");
        _gaq.push(['_trackPageview', curView]);
    }

    document.onclick = function (e) {
        var target = e.target != null ? e.target : e.srcElement;
        if (target.id != "shareBtn") {
            d('shareMenu').style.display = "none";
        }
    }

    getPageAsImage(clipContent, 2);
    getPageAsImage(dragElement, 3);
//    updatePageDom(2)
    window.setTimeout(function () {
        updateThumbnail();
        scrollThumbnail();
    }, 1);
}

function hideTurns() {
    if (leftLoaded && rightLoaded) {
        makeInvisible(clipElement, false);
        makeInvisible(dragElement, false);
        leftLoaded = false;
        rightLoaded = false;
        if (!isMobile){
            d('main').style.overflow = "";
        }
    } else if (isHorizontal) {
        window.setTimeout(hideTurns, 200);
    }
}

function updateThumbnail() {
    var thumbnailDiv = d('thumbnailDiv');
    var data = "<div style='margin:10px 0px 5px 10px;color:white;'>";
    for (var z = 0; z < pageCount; z++) {
        if (z == 0) {
            data = data + "<span style='width:80px;display:inline-block;'></span>";
        }
        var jumpURL = ((z + 1) % 2 == 1) ? (z + 1) : (z + 2);
        data = data + "<img id='jThumb" + (z + 1) + "' src = 'thumbnails/" + (z + 1) + imgFileType + "' width='80px' style='cursor:pointer;' onclick='jumpPage(" + jumpURL + ")'/>";

        if ((z + 1) % 2 === 1) {
            data = data + "<div style='text-align:center;height:25px;'>" + z + "-" + (z + 1) + "</div>";
        }
    }
    data = data + "<p style='color:white;text-align:center;'>End Of Pages</p></div>";
    thumbnailDiv.innerHTML = data;
}

function handleThumbnail() {
    var ele = d('thumbnailDiv');
    ele.style.transitionProperty = "left";
    ele.style.transitionDuration = "300ms";
    ele.style.transitionTimingFunction = "linear";
    if (getInt(getCompStyle(ele, "left")) === 0) {
        ele.style.left = "-200px";
    } else {
        ele.style.left = "0px";
    }
}

function hideShare() {
    d('shareMenu').style.display = "none";
}

function handleShareMenu(e) {
    var style = window.getComputedStyle(d('shareMenu'), null);
//    alert(style.getPropertyValue("top"));
    if (style.getPropertyValue("display") == "none") {
        d('shareMenu').style.display = "inherit";
    } else {
        d('shareMenu').style.display = "none";
    }
}

function goToPage() {
    hideShare();
    var pageToGo = (d('goBtn').selectedIndex) * 2 + 1;
    if (pageToGo === curRP) {
        return;
    }
    else if (pageToGo < curRP) {
        curRP = pageToGo + 2;
        updateMethod("minus");
    } else {
        curRP = pageToGo - 2;
        updateMethod("plus");
    }
    updateSlides();
//    updateDragClip("plus");
}

function jumpPage(pageToGo) {

    if (!isHorizontal) {
        vertGoToPage(pageToGo, true);
    }
    if (pageToGo === curRP) {
        return;
    }
    else if (pageToGo < curRP) {
        curRP = pageToGo + 2;
        updateMethod("minus");
    } else {
        curRP = pageToGo - 2;
        updateMethod("plus");
    }
    updateSlides();
}

function updateTweet() {

    var tweetURL = document.URL;
    if (tweetURL.toString().indexOf("#page") > -1) {
        tweetURL = tweetURL.substr(0, tweetURL.toString().indexOf("#page"));
    }
    tweetURL = tweetURL + "#page=" + curRP;

    var status = encodeURIComponent("" + tweetURL);
    var ecStatus = encodeURIComponent("I am reading Magazine " + tweetURL);

    d('tweetDiv').innerHTML = "<a href='http://twitter.com/home?status=" + ecStatus + "' target='_blank' class='twitter-share-button'> <img src='http://www.jpedal.org/suda/icons/bTwitter.png' style='border:none'/> Twitter</a>";
    d('facebookDiv').innerHTML = "<a href='http://www.facebook.com/sharer/sharer.php?u=" + status + "' target='_blank'><img src='http://www.jpedal.org/suda/icons/bFacebook.jpg'> Facebook</a>";
    d('linkedDiv').innerHTML = "<a href='http://www.linkedin.com/shareArticle?mini=true&url=" + status + "&title=Magazine' target='_blank'><img src='http://www.jpedal.org/suda/icons/bLinkedIn.jpg'> LinkedIn</a>";
    d('googleDiv').innerHTML = "<a href='https://plus.google.com/share?url=" + status + "' target='_blank'><img src='http://www.jpedal.org/suda/icons/bGoogle.jpg'> Google+</a>";

}

function getJumpQuery() {
    var doc = document.URL;
    var jumper = "#page=";
    var jumIdx = doc.toString().indexOf(jumper);

    if (jumIdx !== -1) {
        var p = parseInt((doc.substr(jumIdx + jumper.length, doc.length)));
        if (p > pageCount) {
            curRP = (pageCount % 2 === 0) ? (pageCount - 1) : (pageCount);
        } else if (p < 1) {
            alert("invalid page number");
            curRP = 1;
        } else {
            curRP = (p % 2 === 0) ? (p + 1) : (p);
        }
    }
}

function checkRightLoaded() {
    var frm = rightDiv.contentDocument || ele.contentWindow.document;
    if (frm.readyState === 'complete') {
        return;
    }
    window.setTimeout('checkRightLoaded()', 100);
}

function checkLeftLoaded() {
    var frm = leftDiv.contentDocument || ele.contentWindow.document;
    if (frm.readyState === 'complete') {
        return;
    }
    window.setTimeout('checkLeftLoaded()', 100);
}

function fireLoad(node) {
    if (document.createEvent) {
        var evt = document.createEvent('MouseEvents');
        evt.initEvent('load', true, false);
        node.dispatchEvent(evt);
    } else if (document.createEventObject) {
        node.fireEvent('onload');
    } else if (typeof node.onclick === 'function') {
        node.onload();
    }
}

function turnNext(event) {
    hideShare();
    if (canMove("plus") && !isTurning) {
        setDragBox(3);
        swipePages(event, true);
    }
}

function turnPrev(event) {
    hideShare();
    if (canMove("minus") && !isTurning) {
        setDragBox(4);
        swipePages(event, true);
    }
}

function turnFirst(event) {
    hideShare();
    if (canMove("minus") && !isTurning) {
        leftSlides.textContent = "";
        curRP = 3;
        setDragBox(1);
        swipePages(event, true);
    }
}

function turnLast(event) {
    hideShare();
    if (canMove("plus") && !isTurning) {
        rightSlides.textContent = "";
        curRP = (pageCount % 2 === 0) ? pageCount - 1 : pageCount - 2;
        setDragBox(2);
        swipePages(event, true);
    }
}

function updateSlides() {

    var rc = 8;
    var lc = curRP - 3;
    if ((pageCount - curRP) < 10) {
        rc = pageCount - curRP - 1;
    }
    var dataR = "";
    var dataL = "";
    for (var z = 0; z < rc; z++) {
        dataR = dataR + "<div style='position:absolute;width:1px;height:" + (BOOKHEIGHT - (z * 2)) + "px;top:" + (z + BY) + "px;left:" + (z * 2) + "px;background-color:white;'></div>";
    }
    if (curRP > 10) {
        lc = 10;
    }
    for (var q = 0; q < lc; q++) {
        dataL = dataL + "<div style='position:absolute;width:1px;height:" + (BOOKHEIGHT - (q * 2)) + "px;top:" + (q + BY) + "px;left:" + (BX - (q * 2)) + "px;background-color:white;'></div>";
    }
    d('goBtn').selectedIndex = (curRP / 2);

    rightSlides.innerHTML = dataR;
    leftSlides.innerHTML = dataL;
    scrollThumbnail();
}

function scrollThumbnail() {
    var winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    if (d('jThumb1')) {
        var imgH = getInt(getCompStyle(d('jThumb1'), "height"));
        var divH = 26;
        d('thumbnailDiv').scrollTop = ((curRP - 1) / 2) * (imgH + divH);
    }
}


function updateZoom() {
    var scrollX = window.pageXOffset;
    var scrollY = window.pageYOffset;
    var curHeight = container.getBoundingClientRect().height;

    jpedal.style.transform = "scale(" + zoom + ")";
    jpedal.style.WebkitTransform = "scale(" + zoom + ")";
    jpedal.style.msTransform = "scale(" + zoom + ")";
    jpedal.style.MozTransform = "scale(" + zoom + ")";
    jpedal.style.OTransform = "scale(" + zoom + ")";
    d("container").style.width = width * zoom + "px";
    d("container").style.height = height * zoom + "px";

    var percent = Math.floor(zoom * 100) + "%";
    d("zoomBtn").options[0].textContent = percent;
    d("zoomBtn").selectedIndex = 0;

    var scaledBy = container.getBoundingClientRect().height / curHeight;
    window.scrollTo(scrollX, scrollY * scaledBy);
}



function handleZoom() {
    hideShare()
    var divs = new Array("userTop", "userBottom", "userLeft", "userRight");
    divOriginate(container, 0, 0);

    var imgs = document.getElementsByTagName("img");

    for (var a = 0; a < imgs.length; a++) {
        addCSS(imgs[a], "image-rendering: optimizeQuality;-ms-interpolation-mode: bicubic;");
    }

    if (isZoomed) {
        for (var z = 0; z < divs.length; z++) {
            makeDisplay(d('' + divs[z]), true);
        }
        divMove(d("container"), 0, 0);
        zoomIn(d("container"), 1);
        if (isEC) {
            makeAdDisplay(d('div-gpt-ad-1368107322398-1'), true);
            makeAdDisplay(d('div-gpt-ad-1368107322398-0'), true);
        }
        isZoomed = false;
    } else {
        for (var a = 0; a < divs.length; a++) {
            makeDisplay(d('' + divs[a]), false);
        }
        divMove(d("container"), -(bookX * 1.4) + tBarH, -(bookY * 1.4) + tBarH * 1.4);
        zoomIn(d("container"), 1.4);
        isZoomed = true;
    }
}
function addListeners() {
    var drags = new Array(dlt, drt, drb, dlb);
    if (isTouch) {
        for (var z = 0; z < drags.length; z++) {
            drags[z].addEventListener("touchstart", function (e) {
                e.preventDefault();
                touchStartX = getScrollMX(e);
                touchStartY = getScrollMY(e);
                initDragDrop(e);
            }, false);
            drags[z].addEventListener("touchmove", function (e) {
                movePages(e);
            }, false);
            drags[z].addEventListener("touchend", function (e) {
                swipePages(e, true);
            }, false);
            drags[z].addEventListener("click", function (e) {
                swipePages(e, true)
            }, false);
        }
    }
    else {
        for (var q = 0; q < drags.length; q++) {
            drags[q].addEventListener("mousedown", function (e) {
                initDragDrop(e);
            }, false);
        }
    }
    for (var i = 0; i < drags.length; i++) {
        drags[i].addEventListener("click", function (e) {
            swipePages(e, true)
        }, false);
        drags[i].addEventListener("dblclick", function (e) {
            swipePages(e, true)
        }, false);
    }
}
function removeListeners() {
    dlt.onclick = null;
    drt.onclick = null;
    drb.onclick = null;
    dlb.onclick = null;
}

function initDragDrop(e) {
    var boxNum = 0;
    if (e == null) {
        e = window.event;
    }
    var target = e.target != null ? e.target : e.srcElement;
    var id = target.getAttribute("id")
    if (id == "dlt") {
        boxNum = 1;
    }
    else if (id == "drt") {
        boxNum = 2;
    }
    else if (id == "drb") {
        boxNum = 3;
    }
    else {
        boxNum = 4;
    }
    if (isTouch) {
    } else {
        document.onmousedown = turnStart;
        document.onmouseup = turnEnd;
    }
    currentDrag = boxNum;
    setDragBox(boxNum);
// }
}
function turnStart(e) {

    if (e == null) {//for IE
        e = window.event;
    }
    // IE uses srcElement, others use target
    var target = e.target != null ? e.target : e.srcElement;
    // for IE, left click == 1 for firefox left click == 0
    if ((e.button == 1 && window.event != null || e.button == 0))
    {
        document.onmousemove = onMouseMove;
        document.body.focus();
        // prevent IE from trying to drag an image
        target.ondragstart = function () {
            return false;
        };
        return false;
    }
}
function updateDragClip(method) {
    if (method === "plus") {
        if ((curRP + 1) >= 1 && (curRP + 1) <= pageCount) {
            getPageAsImage(dragElement, curRP + 1);
        }
        else {
            dragElement.textContent = "";
        }
        if ((curRP + 2) >= 1 && (curRP + 2) <= pageCount) {
            getPageAsImage(clipContent, curRP + 2);
        } else {
            clipContent.textContent = "";
            clipContent.style.backgroundColor = boardColor;
        }
    } else {
        if (curRP >= 3) {
            getPageAsImage(dragElement, curRP - 2);
            if (curRP > 3) {
                getPageAsImage(clipContent, curRP - 3);
            } else {
                clipContent.style.backgroundColor = boardColor;
                clipContent.textContent = "";
            }
        }
    }
}

function exchange(from, to) {
    if (from !== null && to !== null) {
        to.innerHTML = from.innerHTML;
    }
}

function doNextXpages(start, end) {
    if (isIE) {
        return;
    } else {
        var ele = newDiv('ele');
        for (var z = start; z <= end; z++) {
            if (z < pageCount) {
                getPage(ele, z);
            }
        }
        ele.textContent = "";
    }
}

function doPrevXpages(start, end) {
    if (isIE) {
        return;
    } else {
        var ele = newDiv('ele');
        for (var z = start; z > end; z--) {
            if (z > 0) {
                getPage(ele, z);
            }
        }
        ele.textContent = "";
    }
}

function canTurnPlus() {
    var canTurn = true;
    var isTotalEven = pageCount % 2 === 0;
    if ((!isTotalEven && curRP === pageCount) || (isTotalEven && (curRP - 1) === pageCount)) {
        canTurn = false;
    }
    return canTurn;
}

function canTurnMinus() {
    var canTurn = true;
    if (curRP === 1) {
        canTurn = false;
    }
    return canTurn;
}


function adjustGivenPage(num) {
    var doc = document.getElementById('ld' + num);
    if (doc !== null) {
        window.eval(doc.innerHTML);
        window['load' + num]();
    }
}

function updateMethod(method) {
    hideMasks();
    if (googletag != null && googletag.pubads != undefined && !isZoomed) {
        googletag.cmd.push(googletag.pubads().refresh());
    }
    var isTotalEven = pageCount % 2 === 0;
    if (curRP === 1) {
        leftDiv.style.backgroundColor = boardColor;
        leftDiv.src = "";
    }

    if (method === "plus") {

        if (!canTurnPlus()) {
            return;
        }
        if (curRP > 2) {
            leftDiv.style.backgroundColor = "white";
        }
        getPage(leftDiv, curRP + 1);
        getPage(rightDiv, curRP + 2);
        if (isTotalEven) {
            if ((curRP + 2) === pageCount) {
                rightDiv.src = "";
                rightDiv.style.backgroundColor = boardColor;
            }
        } else {
            if ((curRP + 1) === pageCount) {
                rightDiv.src = "";
                rightDiv.style.backgroundColor = boardColor;
            }
        }
        curRP = curRP + 2;
        if (curRP >= pageCount) {
            rightDiv.style.backgroundColor = boardColor;
        }
        window.location.hash = "page=" + curRP;
        if (isAnalytics) {
            var curView = aPrefix + "/" + (curRP - 1) + (curRP <= pageCount ? ("-" + curRP) : "");
            _gaq.push(['_trackPageview', curView]);
        }
    } else {
        curRP = curRP - 2;
        if (curRP < 1) {
            curRP = 1;
        }
        getPage(leftDiv, curRP - 1);
        getPage(rightDiv, curRP);
        if (curRP === 1) {
            leftDiv.textContent = "";
            leftDiv.style.backgroundColor = boardColor;
        }
        window.location.hash = "page=" + curRP;
        if (isAnalytics) {
            var curView = aPrefix + "/" + (curRP - 1) + (curRP <= pageCount ? ("-" + curRP) : "");
            _gaq.push(['_trackPageview', curView]);
        }

    }

}

function makeNavBtnDisable() {
    prev.setAttribute("disabled", "disabled");
    next.setAttribute("disabled", "disabled");
}

function makeNavBtnEnable() {
    prev.removeAttribute("disabled");
    next.removeAttribute("disabled");
}

function getPageAsImage(ele, pageNum) {
    if (pageNum > pageCount || pageNum < 1) {
        ele.textContent = "";
        return;
    }
    ele.innerHTML = "<img src='turnImages/" + pageNum + imgFileType + "' width='100%' style='-webkit-backface-visibility: hidden;'/>";
}

function getPage(ele, pageNum) {
    ele.src = "";
    if (pageNum > pageCount || pageNum < 1) {
        ele.src = "";
        return;
    }
    ele.src = "" + pageURL(pageNum, pageCount) + "." + fileType;
}

function getViewStr() {
    if (curRP == 1) {
        return "1";
    }
    else {
        return (curRP - 1) + "-" + (curRP);
    }
}

function handleDRB(mx, my, isFlip) {

    if (isFlip) {
        var mouse = new Point(mx, my);
        f = new Point(mouse.x, mouse.y);
    } else {
        if (zoomRate !== 1.0) {
            CY = getInt(getCompStyle(d('userTop'), "height")) + TBH;
            CX = getInt(getCompStyle(d("container"), "left"));
        }
        var x = (mx - CX) * 1 / zoomRate;
        var y = (my - CY) * 1 / zoomRate;

        var mouse = new Point(x, y);
        f = new Point(mouse.x, mouse.y);
    }

    var innerRadius = p2p(PLT, PRT) / 2;
    SB = new Point(PLB.x + innerRadius, PRB.y);
    var outerRadius = p2p(PLT, SB);
    ST = new Point(PLT.x + innerRadius, PRT.y);
    var MB = new Point(mouse.x, SB.y);

    var SB2M = p2p(SB, f);
    if (SB2M > innerRadius) {
        var pullAng = Math.asin(p2p(mouse, MB) / SB2M);
        var h = Math.sin(pullAng) * innerRadius;
        var w = Math.cos(pullAng) * innerRadius;
        f = new Point(f.x < SB.x ? (SB.x - w) : (SB.x + w), f.y < SB.y ? SB.y - h : SB.y + h);
    }

    var ST2M = p2p(ST, f);
    if (ST2M > outerRadius) {
        var gap = f.y - ST.y;
        var pullAng = Math.acos(gap / ST2M);
        var h = Math.cos(pullAng) * outerRadius;
        var w = Math.sin(pullAng) * outerRadius;
        f = new Point(f.x < SB.x ? (SB.x - w) : (SB.x + w), ST.y + h);
    }

    var FB = new Point(f.x, SB.y);
    var C2EB = p2p(f, PRB); //change
    var C2FB = p2p(f, FB);

    var angRad = Math.asin((C2FB * 0.5) / (C2EB * 0.5));
    ang = getInt(getDegree(angRad));
    var slideAng = 180 - 2 * ang;

    var pageAngle = 180 - slideAng;

    if (f.y > FB.y) {
        pageAngle = -pageAngle;
        z(d("botLeft"), 1);
        z(d("botRight"), 1);
    } else {
        z(d("botLeft"), 11);
        z(d("botRight"), 11);
    }

    var clipDist = (C2EB * 0.5) / Math.cos(angRad);

    if (pageAngle < 0) {
        ang = ang * -1;
    }
    angRad = getRadian(ang);

    var xx = clipDist - (BOOKWIDTH / 2);
    var yy = CLIPDIFF - BY;
    var clipNX = (yy * Math.sin(angRad) + xx * Math.cos(angRad));//(clipAng*3.1);
    var clipNY = (yy * Math.cos(angRad) - xx * Math.sin(angRad));

    divTurn(dragElement, f.x, f.y - BOOKHEIGHT, pageAngle);
    divTurn(clipElement, (PRB.x - clipDist), FB.y - BOOKHEIGHT - CLIPDIFF, ang);
    divTurn(innerClip, clipNX, clipNY, -ang);
//
//    z(d('leftSlides'), 11);
//    z(d('rightSlides'), 11);
}
function handleDLB(mx, my, isFlip) {
    makeOne();
    if (isFlip) {
        var mouse = new Point(mx, my);
        f = new Point(mouse.x, mouse.y);
    } else {
        if (zoomRate != 1.0) {
            CY = getInt(getCompStyle(d('userTop'), "height")) + TBH;
            CX = getInt(getCompStyle(d("container"), "left"));
        }
        var x = (mx - CX) * 1 / zoomRate;
        var y = (my - CY) * 1 / zoomRate;

        var mouse = new Point(x, y);
        f = new Point(mouse.x, mouse.y);
    }
    var innerRadius = p2p(PLT, PRT) / 2;
    SB = new Point(PLB.x + innerRadius, PRB.y);
    var outerRadius = p2p(PLT, SB);
    ST = new Point(PLT.x + innerRadius, PRT.y);
    var MB = new Point(mouse.x, SB.y);

    var SB2M = p2p(SB, f);
    if (SB2M > innerRadius) {
        var pullAng = Math.asin(p2p(mouse, MB) / SB2M);
        var h = Math.sin(pullAng) * innerRadius;
        var w = Math.cos(pullAng) * innerRadius;
        f = new Point(f.x < SB.x ? (SB.x - w) : (SB.x + w), f.y < SB.y ? SB.y - h : SB.y + h);
    }

    var ST2M = p2p(ST, f);
    if (ST2M > outerRadius) {
        var gap = f.y - ST.y;
        var pullAng = Math.acos(gap / ST2M);
        var h = Math.cos(pullAng) * outerRadius;
        var w = Math.sin(pullAng) * outerRadius;
        f = new Point(f.x < SB.x ? (SB.x - w) : (SB.x + w), ST.y + h);
    }

    var FB = new Point(f.x, SB.y);
    var C2EB = p2p(f, PLB); //change
    var C2FB = p2p(f, FB);


    var angRad = Math.asin((C2FB * 0.5) / (C2EB * 0.5));
    ang = getInt(getDegree(angRad));
    var slideAng = 180 - 2 * ang;

    var pageAngle = (180 - slideAng);

    if (f.y > FB.y) {
        pageAngle = -pageAngle;
        z(d("botLeft"), 1);
        z(d("botRight"), 1);
    } else {
        z(d("botLeft"), 11);
        z(d("botRight"), 11);
    }
    var clipDist = (C2EB * 0.5) / Math.cos(angRad);

    if (pageAngle < 0) {
        ang = ang * -1;
    }
    angRad = getRadian(-ang);
    var xx = -(clipDist - (BOOKWIDTH / 2 + 2 * CLIPDIFF));
    var yy = CLIPDIFF - BY;
    var clipNX = (yy * Math.sin(angRad) + xx * Math.cos(angRad));
    var clipNY = (yy * Math.cos(angRad) - xx * Math.sin(angRad));

    divTurn(dragElement, f.x - (BOOKWIDTH / 2), f.y - BOOKHEIGHT, -pageAngle);
    divTurn(clipElement, PLB.x + clipDist - ((BOOKWIDTH / 2) + 2 * CLIPDIFF), FB.y - BOOKHEIGHT - CLIPDIFF, -ang);
    divTurn(innerClip, clipNX, clipNY, ang);

//    z(d('leftSlides'), 11);
//    z(d('rightSlides'), 11);

}
function handleDLT(mx, my, isFlip) {
    makeOne();
    if (isFlip) {
        var mouse = new Point(mx, my);
        f = new Point(mouse.x, mouse.y);
    } else {
        if (zoomRate != 1.0) {
            CY = getInt(getCompStyle(d('userTop'), "height")) + TBH;
            CX = getInt(getCompStyle(d("container"), "left"));
        }
        var x = (mx - CX) * 1 / zoomRate;
        var y = (my - CY) * 1 / zoomRate;

        var mouse = new Point(x, y);
        f = new Point(mouse.x, mouse.y);
    }

    var innerRadius = p2p(PLT, PRT) / 2;
    SB = new Point(PLT.x + innerRadius, PRT.y);
    var outerRadius = p2p(PLB, SB);
    ST = new Point(PLB.x + innerRadius, PRB.y);
    var MB = new Point(mouse.x, SB.y);

    var SB2M = p2p(SB, f);
    if (SB2M > innerRadius) {
        var pullAng = Math.asin(p2p(mouse, MB) / SB2M);
        var h = Math.sin(pullAng) * innerRadius;
        var w = Math.cos(pullAng) * innerRadius;
        f = new Point(f.x < SB.x ? (SB.x - w) : (SB.x + w), f.y < SB.y ? SB.y - h : SB.y + h);
    }

    var ST2M = p2p(ST, f);
    if (ST2M > outerRadius) {
        var gap = f.y - ST.y;
        var pullAng = Math.acos(gap / ST2M);
        var h = Math.cos(pullAng) * outerRadius;
        var w = Math.sin(pullAng) * outerRadius;
        f = new Point(f.x < SB.x ? (SB.x - w) : (SB.x + w), ST.y + h);
    }

    var FB = new Point(f.x, SB.y);
    var C2EB = p2p(f, PLT); //change
    var C2FB = p2p(f, FB);


    var angRad = Math.asin((C2FB * 0.5) / (C2EB * 0.5));
    ang = getInt(getDegree(angRad));
    var slideAng = 180 - 2 * ang;

    var pageAngle = (180 - slideAng);

    if (f.y > FB.y) {
        pageAngle = -pageAngle;
        z(d("topLeft"), 11);
        z(d("topRight"), 11);
    }
    var clipDist = (C2EB * 0.5) / Math.cos(angRad);

    if (pageAngle < 0) {
        ang = ang * -1;
    }
    angRad = getRadian(-ang);
    var xx = -(clipDist - (BOOKWIDTH / 2 + 2 * CLIPDIFF));
    var yy = CLIPDIFF - BY;
    var clipNX = (yy * Math.sin(angRad) + xx * Math.cos(angRad));
    var clipNY = (yy * Math.cos(angRad) - xx * Math.sin(angRad));

    divTurn(dragElement, f.x - (BOOKWIDTH / 2), f.y, -pageAngle);
    divTurn(clipElement, PLB.x + clipDist - ((BOOKWIDTH / 2) + 2 * CLIPDIFF), FB.y - CLIPDIFF, -ang);
    divTurn(innerClip, clipNX, clipNY, ang);

//    z(d('leftSlides'), 11);
//    z(d('rightSlides'), 11);
}
function handleDRT(mx, my, isFlip) {
    makeOne();
    if (isFlip) {
        var mouse = new Point(mx, my);
        f = new Point(mouse.x, mouse.y);
    } else {
        if (zoomRate != 1.0) {
            CY = getInt(getCompStyle(d('userTop'), "height")) + TBH;
            CX = getInt(getCompStyle(d("container"), "left"));
        }
        var x = (mx - CX) * 1 / zoomRate;
        var y = (my - CY) * 1 / zoomRate;

        var mouse = new Point(x, y);
        f = new Point(mouse.x, mouse.y);
    }
    var innerRadius = p2p(PLT, PRT) / 2;
    SB = new Point(PLT.x + innerRadius, PRT.y);
    var outerRadius = p2p(PLB, SB);
    ST = new Point(PLB.x + innerRadius, PRB.y);
    var MB = new Point(mouse.x, SB.y);

    var SB2M = p2p(SB, f);
    if (SB2M > innerRadius) {
        var pullAng = Math.asin(p2p(mouse, MB) / SB2M);
        var h = Math.sin(pullAng) * innerRadius;
        var w = Math.cos(pullAng) * innerRadius;
        f = new Point(f.x < SB.x ? (SB.x - w) : (SB.x + w), f.y < SB.y ? SB.y - h : SB.y + h);
    }

    var ST2M = p2p(ST, f);
    if (ST2M > outerRadius) {
        var gap = f.y - ST.y;
        var pullAng = Math.acos(gap / ST2M);
        var h = Math.cos(pullAng) * outerRadius;
        var w = Math.sin(pullAng) * outerRadius;
        f = new Point(f.x < SB.x ? (SB.x - w) : (SB.x + w), ST.y + h);
    }

    var FB = new Point(f.x, SB.y);
    var C2EB = p2p(f, PRT); //change
    var C2FB = p2p(f, FB);

    var angRad = Math.asin((C2FB * 0.5) / (C2EB * 0.5));
    ang = getInt(getDegree(angRad));
    var slideAng = 180 - 2 * ang;

    var pageAngle = 180 - slideAng;

    if (f.y > FB.y) {
        pageAngle = -pageAngle;
        d("topLeft").style.zIndex = 11;
        d("topRight").style.zIndex = 11;
    }

    var clipDist = (C2EB * 0.5) / Math.cos(angRad);

    if (pageAngle < 0) {
        ang = ang * -1;
    }
    angRad = getRadian(ang);

    var xx = clipDist - (BOOKWIDTH / 2);
    var yy = CLIPDIFF - BY;
    var clipNX = (yy * Math.sin(angRad) + xx * Math.cos(angRad));//(clipAng*3.1);
    var clipNY = (yy * Math.cos(angRad) - xx * Math.sin(angRad));

    divTurn(dragElement, f.x, f.y, pageAngle);
    divTurn(clipElement, (PRB.x - clipDist), FB.y - CLIPDIFF, ang);
    divTurn(innerClip, clipNX, clipNY, -ang);

//    z(d('leftSlides'), 11);
//    z(d('rightSlides'), 11);
}

function showMasks() {
    z(rightMask, 2);
    z(leftMask, 2);
}

function hideMasks() {
    z(rightMask, -2);
    z(leftMask, -2);
}

function movePages(e) {
    showMasks();
    hideShare();
    // if(isTouch){
    // e.preventDefault();
    // }
    var mx = getScrollMX(e);
    var my = getScrollMY(e);
    switch (dragBox) {
        case 1:
            if (canMove("minus")) {
                showDrags();
                divOriginate(dragElement, BOOKWIDTH / 2, 0);
                divOriginate(clipElement, BOOKWIDTH / 2 + CLIPDIFF * 2, CLIPDIFF);
                divOriginate(innerClip, BOOKWIDTH / 2 + CLIPDIFF * 2, CLIPDIFF);
                handleDLT(mx, my, false);
            } else {
                return;
            }
            break;
        case 2:
            if (canMove("plus")) {
                showDrags();
                divOriginate(dragElement, 0, 0);
                divOriginate(clipElement, 0, CLIPDIFF);
                divOriginate(innerClip, 0, CLIPDIFF);
                handleDRT(mx, my, false);
            } else {
                return;
            }
            break;
        case 3:
            if (canMove("plus")) {
                showDrags();
                divOriginate(dragElement, 0, BOOKHEIGHT);
                divOriginate(clipElement, 0, BOOKHEIGHT + CLIPDIFF);
                divOriginate(innerClip, 0, BOOKHEIGHT + CLIPDIFF);
                handleDRB(mx, my);
            } else {
                return;
            }
            break;
        case 4:
            if (canMove("minus")) {
                showDrags();
                divOriginate(dragElement, BOOKWIDTH / 2, BOOKHEIGHT);
                divOriginate(clipElement, BOOKWIDTH / 2 + CLIPDIFF * 2, BOOKHEIGHT + CLIPDIFF);
                divOriginate(innerClip, BOOKWIDTH / 2 + CLIPDIFF * 2, BOOKHEIGHT + CLIPDIFF);
                handleDLB(mx, my);
            } else {
                return;
            }
            break;
    }
}

function canMove(method) {
    if (method === "plus") {
        if (pageCount % 2 === 0) {
            if (curRP + 1 > pageCount) {
                return false;
            }
        } else {
            if (curRP >= pageCount) {
                return false;
            }
        }
    } else {
        if (curRP === 1) {
            return false;
        }
    }
    return true;
}

function swipePages(e, isFlip) {

    hideShare();
    if (isTouch) {
        var t = e.target != null ? e.target : e.srcElement;
        if (t.getAttribute("id") == "prev" || t.getAttribute("id") == "next") {
            isFlip = true;
        }
        else if (Math.abs(lastX - touchStartX) > TBH || Math.abs(lastY - touchStartY) > TBH) {
            isFlip = false;
        }
        else {
            isFlip = true;
        }
    }
    var x = new Array();
    var y = new Array();
    var inter;
    switch (dragBox) {
        case 1:
            divOriginate(dragElement, BOOKWIDTH / 2, 0);
            divOriginate(clipElement, BOOKWIDTH / 2 + CLIPDIFF * 2, CLIPDIFF);
            divOriginate(innerClip, BOOKWIDTH / 2 + CLIPDIFF * 2, CLIPDIFF);
            if (!canMove("minus") || isTurning) {
                return;
            }
            if (isTouch) {
                toAnimX = lastX;
                toAnimY = lastY;
            } else {
                toAnimX = getScrollMX(e);
                toAnimY = getScrollMY(e);
            }
            toAnimX = toAnimX > bookX ? toAnimX : getInt(dragElement.style.left);

            isTurning = true;
            if (!f || f.x === -1) {
                f = new Point(PLT.x + 100, PLT.y + 50);
            }
            var hyps = p2p(f, PRT);
            var opp = f.y - PRT.y;
            var adj = PRT.x - f.x;

            var angRad = Math.asin(opp / hyps);
            var hyp = hyps;
            var xStart = f.x;
            var yStart = f.y;

            var inter = window.setInterval(function () {
                hyp = hyp - frameRate;
                var tAdj = Math.cos(angRad) * hyp;
                var tOpp = Math.sin(angRad) * hyp;
                var xGap = adj - tAdj;
                var yGap = opp - tOpp;
                handleDLT(xStart + xGap, yStart - yGap, true);
                if (hyp < 0) {
                    clearInterval(inter);
                    updateMethod("minus");
                    setDragBox(-1);
                    isTurning = false;
                    hideDragsAnim();
                    updateSlides();
                    updateTweet();
                    f.x = -1;
                }
                showDrags();
            }, speed);

            break;
        case 2:
            divOriginate(dragElement, 0, 0);
            divOriginate(clipElement, 0, CLIPDIFF);
            divOriginate(innerClip, 0, CLIPDIFF);
            if (!canMove("plus") || isTurning) {
                return;
            }

            if (isTouch) {
                toAnimX = lastX;
                toAnimY = lastY;
            } else {
                toAnimX = getScrollMX(e);
                toAnimY = getScrollMY(e);
            }
            toAnimX = toAnimX > bookX ? toAnimX : getInt(dragElement.style.left);

            isTurning = true;
            if (!f || f.x === -1) {
                f = new Point(PRT.x - 100, PRT.y + 50);
            }
            var hyps2 = p2p(f, PLT);
            var opp2 = f.y - PLT.y;
            var adj2 = f.x - PLT.x;

            var angRad2 = Math.asin(opp2 / hyps2);
            var hyp2 = hyps2;
            var xStart2 = f.x;
            var yStart2 = f.y;

            var inter2 = window.setInterval(function () {
                hyp2 = hyp2 - frameRate;
                var tAdj2 = Math.cos(angRad2) * hyp2;
                var tOpp2 = Math.sin(angRad2) * hyp2;
                var xGap2 = adj2 - tAdj2;
                var yGap2 = opp2 - tOpp2;
                handleDRT(xStart2 - xGap2, yStart2 - yGap2, true);
                showDrags();
                if (hyp2 < 0) {
                    clearInterval(inter2);
                    updateMethod("plus");
                    setDragBox(-1);
                    hideDragsAnim();
                    updateSlides();
                    updateTweet();
                    isTurning = false;
                    f.x = -1;
                }
                showDrags();
            }, speed);

            break;

        case 3:
            divOriginate(dragElement, 0, BOOKHEIGHT);
            divOriginate(clipElement, 0, BOOKHEIGHT + CLIPDIFF);
            divOriginate(innerClip, 0, BOOKHEIGHT + CLIPDIFF);
            if (!canMove("plus") || isTurning) {
                return;
            }

            if (isTouch) {
                toAnimX = lastX;
                toAnimY = lastY;
            } else {
                toAnimX = getScrollMX(e);
                toAnimY = getScrollMY(e);
            }
            toAnimX = toAnimX > bookX ? toAnimX : getInt(dragElement.style.left);

            isTurning = true;
            if (!f || f.x === -1) {
                f = new Point(PRB.x - 100, PRB.y - 50);
            }
            var hyps3 = p2p(f, PLB);
            var opp3 = PRB.y - f.y;
            var adj3 = f.x - PLB.x;

            var angRad3 = Math.asin(opp3 / hyps3);
            var hyp3 = hyps3;
            var xStart3 = f.x;
            var yStart3 = f.y;

            var inter3 = window.setInterval(function () {
                hyp3 = hyp3 - frameRate;
                var tAdj3 = Math.cos(angRad3) * hyp3;
                var tOpp3 = Math.sin(angRad3) * hyp3;
                var xGap3 = adj3 - tAdj3;
                var yGap3 = opp3 - tOpp3;
                handleDRB(xStart3 - xGap3, yStart3 + yGap3, true);
                showDrags();
                if (hyp3 < 0) {
                    clearInterval(inter3);
                    updateMethod("plus");
                    setDragBox(-1);
                    hideDragsAnim();
                    updateSlides();
                    updateTweet();
                    isTurning = false;
                    f.x = -1;
                }
                showDrags();
            }, speed);
            break;
        case 4:
            divOriginate(dragElement, BOOKWIDTH / 2, BOOKHEIGHT);
            divOriginate(clipElement, BOOKWIDTH / 2 + CLIPDIFF * 2, BOOKHEIGHT + CLIPDIFF);
            divOriginate(innerClip, BOOKWIDTH / 2 + CLIPDIFF * 2, BOOKHEIGHT + CLIPDIFF);
            if (!canMove("minus") || isTurning) {
                return;
            }
            if (isTouch) {
                toAnimX = lastX;
                toAnimY = lastY;
            } else {
                toAnimX = getScrollMX(e);
                toAnimY = getScrollMY(e);
            }
            toAnimX = toAnimX > bookX ? toAnimX : getInt(dragElement.style.left);

            isTurning = true;
            if (!f || f.x === -1) {
                f = new Point(PLB.x + 100, PLB.y - 50);
            }
            var hyps4 = p2p(f, PRB);
            var opp4 = PRB.y - f.y;
            var adj4 = PRB.x - f.x;

            var angRad4 = Math.asin(opp4 / hyps4);
            var hyp4 = hyps4;
            var xStart4 = f.x;
            var yStart4 = f.y;

            var inter4 = window.setInterval(function () {
                hyp4 = hyp4 - frameRate;
                var tAdj4 = Math.cos(angRad4) * hyp4;
                var tOpp4 = Math.sin(angRad4) * hyp4;
                var xGap4 = adj4 - tAdj4;
                var yGap4 = opp4 - tOpp4;
                handleDLB(xStart4 + xGap4, yStart4 + yGap4, true);
                if (hyp4 < 0) {
                    clearInterval(inter4);
                    updateMethod("minus");
                    setDragBox(-1);
                    isTurning = false;
                    hideDragsAnim();
                    updateSlides();
                    updateTweet();
                    f.x = -1;
                }
                showDrags();
            }, speed);
            break;
    }
//googletag.cmd.push(googletag.pubads().refresh());   
}
function onMouseMove(e) {
    if (e === null) {
        var e = window.event;
    }
    movePages(e);
}

function turnEnd(e)
{
    if (dragElement !== null) {
        swipePages(e, true);
        document.onmousemove = null;
        document.onmouseup = null;
        document.onmousedown = null;
    }
}
//below here are the utility functions and no need to change these
function pageURL(cur, total) {
    return cur;
//    if(cur==total){
//        return ""+cur;
//    }else{
//        var str = ""+cur;
//        var totStr = ""+total;
//        var pad = totStr.length - str.length;
//        for(var z=0;z<pad;z++){
//            str = "0"+str;
//        }
//        return str;
//    }
}



function makeDisplay(ele, show) {
    if (show) {
        ele.style.display = "inherit";
        //        ele.style.visibility="visible";
    } else {
        ele.style.display = "none";
        //        ele.style.visibility="hidden";
    }
}

function makeInvisible(ele, show) {
    if (show) {
        ele.style.display = "inherit";
        ele.style.visibility = "visible";
    } else {
        //         ele.style.display="none";
        ele.style.visibility = "hidden";
    }
}
function makeAdDisplay(ele, show) {
    if (show) {
        ele.style.display = "inherit";
    } else {
        ele.style.display = "none";
    }
}
function divStop(ele) {
    var properties = ['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'];
    for (var z = 0; z < properties.length; z++) {
        ele.style[properties[z]] = 'none';
    }
}

function divGradient(ele, color) {
    ele.style.backgroundImage = "-webkit-gradient(whatever)";
}


function keyNav(e) {
    if (e.keyCode === 39) {
        if (canMove("plus")) {
            setDragBox(2);
            swipePages(e, true);
        }
    }
    else if (e.keyCode === 37) {
        if (canMove("minus")) {
            setDragBox(1);
            swipePages(e, true);
        }
    }
}

/**zoom the element*/
function zoomIn(ele, zoom) {
    if (!isIos && zoom > 0.25) {
        ele.style.transform = 'scale(' + zoom + ') translate3d(0,0,0)';
        ele.style.MozTransform = 'scale(' + zoom + ') translate3d(0,0,0)';
        ele.style.msTransform = 'scale(' + zoom + ') translate3d(0,0,0)';
        ele.style.OTransform = 'scale(' + zoom + ') translate3d(0,0,0)';
        ele.style.webkitTransform = 'scale(' + zoom + ') translate3d(0,0,0)';
    } else {
        ele.style.transform = 'scale(' + zoom + ')';
        ele.style.MozTransform = 'scale(' + zoom + ')';
        ele.style.msTransform = 'scale(' + zoom + ')';
        ele.style.OTransform = 'scale(' + zoom + ')';
        ele.style.webkitTransform = 'scale(' + zoom + ')';
    }

// Make webkit redraw text to prevent blurring.
//    if (isTouch) {
//        d('main').style.display = 'none';
//        d('main').offsetHeight;
//        d('main').style.display = 'block';
//    }
}

function setDragBox(num) {
    dragBox = num;
    switch (num) {
        case 1:
            updateDragClip("minus");
            break;
        case 2:
            updateDragClip("plus");
            break;
        case 3:
            updateDragClip("plus");
            break;
        case 4:
            updateDragClip("minus");
            break;
    }
}

function getScrollMX(e) {
    var mx = mx = e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);

    if (isTouch) {
        mx = e.touches[0].pageX;
        lastX = mx;
    }
    var t = e.target !== null ? e.target : e.srcElement;
    if (t.getAttribute("id") === "prev" || t.getAttribute("id") === "backward") {
        return PLT.x;
    } else if (t.getAttribute("id") === "next" || t.getAttribute("id") === "forward") {
        return PRT.x;
    }
    return mx;
}

function getScrollMY(e) {
    var my = e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    if (isTouch) {
        my = e.touches[0].pageY;
        lastY = my;
    }
    var t = e.target !== null ? e.target : e.srcElement;
    if (t.getAttribute("id") === "prev" || t.getAttribute("id") === "backward") {
        return PLT.y;
    } else if (t.getAttribute("id") === "next" || t.getAttribute("id") === "forward") {
        return PRT.y;
    }
    return my;
}


function addVideoLink(x, y, width, height, container, link) {
    var linkEl = document.createElement("input");
    linkEl.setAttribute("type", "button");
    linkEl.setAttribute("class", "videoLink");
    linkEl.setAttribute("onclick", "openVideoLink('" + link + "');");
    if (isIE) {
        addCSS(linkEl, "position:absolute; z-index:30; opacity:0.1; cursor:pointer;");
    } else {
        addCSS(linkEl, "position:absolute; z-index:30; cursor:pointer; background:none repeat scroll 0 0 transparent;");
    }

    divResize(linkEl, width, height);
    divMove(linkEl, x, y);
    linkEl.style.borderStyle = "none";
    // <input type="button" tabindex="4" id="form12" name="1026 0 R" pdfFieldName="1026 0 R" onclick="window.location.href='08.html';" style="cursor:pointer;" title="Page 8"/>
    container.insertBefore(linkEl, container.firstChild);
}

function addLink(x, y, width, height, container, link) {

    var linkEl = document.createElement("input");
    linkEl.setAttribute("type", "button");
    linkEl.setAttribute("class", "link");
    linkEl.setAttribute("onclick", "window.open('" + link + "', '_blank');");
    if (isIE) {
        addCSS(linkEl, "position:absolute; z-index:30; opacity:0.1; cursor:pointer;");
    } else {
        addCSS(linkEl, "position:absolute; z-index:30; cursor:pointer; background:none repeat scroll 0 0 transparent;");
    }
    divResize(linkEl, width, height);
    divMove(linkEl, x, y);
    linkEl.style.borderStyle = "none";
    container.insertBefore(linkEl, container.firstChild);
}

function removeVideoLinks() {
    var videoLinks = document.getElementsByClassName("videoLink");
    for (var i = 0; i < videoLinks.length; i++) {
        var element = videoLinks.item(i);
        element.parentNode.removeChild(element);
    }
    var links = document.getElementsByClassName("link");
    for (var i = 0; i < links.length; i++) {
        var element = links.item(i);
        element.parentNode.removeChild(element);
    }
}

function openVideoLink(link) {
    //     alert("Open link: " + link);
    var container = document.getElementsByTagName("body")[0];
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", link);
    ifrm.setAttribute("frameborder", "0");
    ifrm.setAttribute("allowfullscreen", "");
    ifrm.setAttribute("id", "youtubeVideo");
    ifrm.style.width = 640 + "px";
    ifrm.style.height = 360 + "px";
    ifrm.style.position = "fixed";
    ifrm.style.margin = "-180px 0 0 -320px";
    ifrm.style.top = "50%";
    ifrm.style.left = "50%";
    var videoBg = document.createElement("div");
    videoBg.setAttribute("id", "videoOverlay");
    videoBg.setAttribute("onclick", "closeVideoLink();");
    videoBg.style.backgroundColor = "black";
    videoBg.style.opacity = 0.9;
    videoBg.style.position = "fixed";
    videoBg.style.top = "0";
    videoBg.style.left = "0";
    videoBg.style.width = "100%";
    videoBg.style.height = "100%";
    videoBg.style.zIndex = "100";
    container.insertBefore(videoBg, container.children[1]);
    // videoBg.appendChild(ifrm);
    var centredDiv = document.createElement("div");
    centredDiv.style.backgroundColor = "white";
    centredDiv.id = "videoDiv";
    centredDiv.style.margin = "-200px 0 0 -340px";
    centredDiv.style.width = 680 + "px";
    centredDiv.style.height = 400 + "px";
    centredDiv.style.position = "fixed";
    centredDiv.style.top = "50%";
    centredDiv.style.left = "50%";
    centredDiv.style.zIndex = "150";
    centredDiv.style.opacity = 1;
    container.insertBefore(centredDiv, container.children[1]);
    centredDiv.appendChild(ifrm);
    var closeButton = document.createElement("a");
    closeButton.textContent = "close";
    closeButton.setAttribute("href", "javascript:closeVideoLink();");
    closeButton.style.color = "red";
    closeButton.style.fontSize = "20px";
    closeButton.style.position = "relative";
    closeButton.style.left = 630 + "px";
    closeButton.style.top = "-2px";
    closeButton.style.textDecoration = "none";
    centredDiv.insertBefore(closeButton, ifrm);
}

function closeVideoLink() {
    var el = document.getElementById("videoOverlay");
    if (el !== null) {
        if (d('youtubeVideo') !== null) {
            d('youtubeVideo').removeAttribute("src");
            d('youtubeVideo').textContent = "";
        }
        el.textContent = "";
        el.parentNode.removeChild(el);
        el = document.getElementById("videoDiv");
        if (el !== null) {
            el.textContent = "";
            el.parentNode.removeChild(el);
        }
    }
}
