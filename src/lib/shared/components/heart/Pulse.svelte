<div class='pulse'></div>

<style>
.pulse {
  height: 40px;
  width: 160px;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0.3;
}
.pulse:after {
  content: "";
  display: block;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160px 40px"><polyline fill="none" stroke-width="2px" stroke="white" points="0 25.714 56.008 25.714 60.348 16.786 64.442 25.714 71.648 25.714 74.841 31.285 82.211 0 88.598 40 92.446 25.714 101.535 25.714 108.086 22.857 114.637 25.714 160 25.714"/></svg>') 0 0 no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-animation: 2s pulse infinite linear;
          animation: 2s pulse infinite linear;
}
.pulse:before {
  content: "";
  background: #444;
  position: absolute;
  z-index: -1;
  left: 2px;
  right: 2px;
  bottom: 0;
  top: 10px;
  margin: auto;
  height: 2px;
}

@-webkit-keyframes pulse {
  0% {
    clip: rect(0, 0, 40px, 0);
  }
  10% {
    clip: rect(0, 53.3333333333px, 40px, 0);
  }
  38% {
    clip: rect(0, 106.6666666667px, 40px, 0);
  }
  48% {
    clip: rect(0, 160px, 40px, 0);
  }
  52% {
    clip: rect(0, 160px, 40px, 0);
  }
  62% {
    clip: rect(0, 160px, 40px, 53.3333333333px);
  }
  90% {
    clip: rect(0, 160px, 40px, 106.6666666667px);
  }
  100% {
    clip: rect(0, 160px, 40px, 160px);
  }
}

@keyframes pulse {
  0% {
    clip: rect(0, 0, 40px, 0);
  }
  10% {
    clip: rect(0, 53.3333333333px, 40px, 0);
  }
  38% {
    clip: rect(0, 106.6666666667px, 40px, 0);
  }
  48% {
    clip: rect(0, 160px, 40px, 0);
  }
  52% {
    clip: rect(0, 160px, 40px, 0);
  }
  62% {
    clip: rect(0, 160px, 40px, 53.3333333333px);
  }
  90% {
    clip: rect(0, 160px, 40px, 106.6666666667px);
  }
  100% {
    clip: rect(0, 160px, 40px, 160px);
  }
}
</style>