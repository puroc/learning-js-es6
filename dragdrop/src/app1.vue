<template>
  <div id="app">
    <div class="loading">
      Loading images...
    </div>
    <div class="grid">
      <div class="item">
        <div class="item-content">
          <img src="https://placeimg.com/195/400/any?1" />
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="https://placeimg.com/400/195/any?2" />
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="https://placeimg.com/195/400/any?3" />
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="https://placeimg.com/400/195/any?4" />
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="https://placeimg.com/195/400/any?5" />
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="https://placeimg.com/400/195/any?6" />
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="https://placeimg.com/195/400/any?7" />
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="https://placeimg.com/400/195/any?8" />
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="https://placeimg.com/195/400/any?9" />
        </div>
      </div>
      <div class="item">
        <div class="item-content">
          <img src="https://placeimg.com/400/195/any?10" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Muuri from "muuri";
export default {
  name:'app1',
  mounted() {
      var grid = new Muuri('.grid', {
        dragEnabled: true,
        layout: {
          fillGaps: true
        }
      });

      // When all items have loaded refresh their
      // dimensions and layout the grid.
      window.addEventListener("load", function() {
        grid.refreshItems().layout();
        // For a little finishing touch, let's fade in
        // the images after all them have loaded and
        // they are corrertly positioned.
        document.body.classList.add("images-loaded");
      });
  }
};
</script>

<style>
.grid {
  position: relative;
  opacity: 0;
  transition: opacity 0.8s linear 1s;
}
.images-loaded .grid {
  opacity: 1;
}
.item {
  position: absolute;
  margin: 5px;
  z-index: 1;
}
.item.muuri-item-hidden {
  z-index: 0;
}
.item.muuri-item-releasing {
  z-index: 2;
}
.item.muuri-item-dragging {
  z-index: 3;
}
.item-content {
  position: relative;
  cursor: pointer;
}
.item-content > img {
  display: block;
  border-radius: 6px;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-transform: uppercase;
  transition: opacity 0.6s linear 0.4s;
}
.images-loaded .loading {
  opacity: 0;
}
</style>
