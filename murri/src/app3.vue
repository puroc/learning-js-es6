<template>
    <div id="app">
        <div class="grid grid-1">
            <div class="item">
                <div class="item-content">1</div>
            </div>
            <div class="item">
                <div class="item-content">2</div>
            </div>
            <div class="item">
                <div class="item-content">3</div>
            </div>
            <div class="item">
                <div class="item-content">4</div>
            </div>
            <div class="item">
                <div class="item-content">5</div>
            </div>
            <div class="item">
                <div class="item-content">6</div>
            </div>
            <div class="item">
                <div class="item-content">7</div>
            </div>
            <div class="item">
                <div class="item-content">8</div>
            </div>
            <div class="item">
                <div class="item-content">9</div>
            </div>
            <div class="item">
                <div class="item-content">10</div>
            </div>
            <div class="item">
                <div class="item-content">11</div>
            </div>
            <div class="item">
                <div class="item-content">12</div>
            </div>
            <div class="item">
                <div class="item-content">13</div>
            </div>
            <div class="item">
                <div class="item-content">14</div>
            </div>
            <div class="item">
                <div class="item-content">15</div>
            </div>
            <div class="item">
                <div class="item-content">16</div>
            </div>
            <div class="item">
                <div class="item-content">17</div>
            </div>
            <div class="item">
                <div class="item-content">18</div>
            </div>
            <div class="item">
                <div class="item-content">19</div>
            </div>
            <div class="item">
                <div class="item-content">20</div>
            </div>
        </div>

        <div class="grid grid-2">
            <div class="item">
                <div class="item-content">1</div>
            </div>
            <div class="item">
                <div class="item-content">2</div>
            </div>
            <div class="item">
                <div class="item-content">3</div>
            </div>
            <div class="item">
                <div class="item-content">4</div>
            </div>
            <div class="item">
                <div class="item-content">5</div>
            </div>
            <div class="item">
                <div class="item-content">6</div>
            </div>
            <div class="item">
                <div class="item-content">7</div>
            </div>
            <div class="item">
                <div class="item-content">8</div>
            </div>
            <div class="item">
                <div class="item-content">9</div>
            </div>
            <div class="item">
                <div class="item-content">10</div>
            </div>
            <div class="item">
                <div class="item-content">11</div>
            </div>
            <div class="item">
                <div class="item-content">12</div>
            </div>
            <div class="item">
                <div class="item-content">13</div>
            </div>
            <div class="item">
                <div class="item-content">14</div>
            </div>
            <div class="item">
                <div class="item-content">15</div>
            </div>
            <div class="item">
                <div class="item-content">16</div>
            </div>
            <div class="item">
                <div class="item-content">17</div>
            </div>
            <div class="item">
                <div class="item-content">18</div>
            </div>
            <div class="item">
                <div class="item-content">19</div>
            </div>
            <div class="item">
                <div class="item-content">20</div>
            </div>
        </div>
    </div>
</template>

<script>
import Muuri from "muuri";
export default {
  name: "app3",
  mounted() {
    var grid1 = new Muuri(".grid-1", {
      dragEnabled: true,
      dragContainer: document.body,
      dragSort: function() {
        return [grid1, grid2];
      }
    });

    var grid2Hash = {};
    var grid2 = new Muuri(".grid-2", {
      dragEnabled: true,
      dragContainer: document.body,
      dragSort: true
    })
      .on("receive", function(data) {
        grid2Hash[data.item._id] = function(item) {
          if (item === data.item) {
            var clone = cloneElem(data.item.getElement());
            data.fromGrid.add(clone, { index: data.fromIndex });
            data.fromGrid.show(clone);
          }
        };
        grid2.once("dragReleaseStart", grid2Hash[data.item._id]);
      })
      .on("send", function(data) {
        var listener = grid2Hash[data.item._id];
        if (listener) {
          grid2.off("dragReleaseStart", listener);
        }
      });

    function cloneElem(elem) {
      var clone = elem.cloneNode(true);
      clone.setAttribute("style", "display:none;");
      clone.setAttribute("class", "item");
      clone.children[0].setAttribute("style", "");
      return clone;
    }
  }
};
</script>

<style>
body {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
}
.grid {
  position: relative;
  width: calc(50% - 40px);
  background: #ccc;
  border: 5px solid transparent;
}
.item {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
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
  width: 100%;
  height: 100%;
  text-align: center;
  background: red;
  font-size: 30px;
  color: white;
  cursor: pointer;
}
.grid-2 .item-content {
  background: green;
}
.item.muuri-item-dragging .item-content,
.item.muuri-item-releasing .item-content {
  background: blue;
}
</style>
