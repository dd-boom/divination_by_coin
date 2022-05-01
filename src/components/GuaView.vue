<template>
  <div ref="refContainer" class="h200px pr">
    <canvas ref="refRoughView" />
    <div
      class="pa df aic tal plr-4px lh-16px border-box"
      v-for="({ layout, children }, idx) in contentBox"
      :key="idx"
      :style="{
        top: layout.top + 'px',
        left: layout.left + 'px',
        width: layout.width + 'px',
        height: layout.height + 'px',
      }"
    >
      {{ children }}
    </div>
  </div>
</template>

<script lang="ts">
import type { GuaInfo } from "@/types/common";
type GenerateGua = (arg: GuaInfo) => void;
import { useStore } from "vuex";
// 直接引用'roughjs'会报错别问我为什么我也不知道
import rough from "roughjs/bundled/rough.cjs.js";
import { RoughCanvas } from "roughjs/bin/canvas";
import { defineComponent, onMounted, ref } from "vue";

type ContentBox = {
  children: string;
  layout: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
};

const guaYaoPositionY = {
  "1": [125, 115, 105, 95, 85, 75],
  "2": [
    [80, 70, 60, 50, 40, 30],
    [165, 155, 145, 135, 125, 115],
  ],
};

const YAO_HEIGHT = 5;
const genDrawYing =
  (arg: { x: number; width: number; spacing: number; rc: RoughCanvas }) =>
  (y: number) => {
    const { x, width: totalWidth, spacing, rc } = arg;
    const singleWidth = (totalWidth - spacing) / 2;
    rc.rectangle(x, y, singleWidth, YAO_HEIGHT, {
      fill: "dimgray",
      stroke: "dimgray",
    });
    rc.rectangle(x + singleWidth + spacing, y, singleWidth, YAO_HEIGHT, {
      fill: "dimgray",
      stroke: "dimgray",
    });
  };
const genDrawYang =
  (arg: { x: number; width: number; rc: RoughCanvas }) => (y: number) => {
    const { x, width, rc } = arg;
    rc.rectangle(x, y, width, YAO_HEIGHT, {
      stroke: "orangered",
      fill: "orangered",
    });
  };
const drawGua = (arg: {
  guaId: string;
  positionY: number[];
  drawYing: (y: number) => void;
  drawYang: (y: number) => void;
}) => {
  const { guaId, positionY, drawYing, drawYang } = arg;
  guaId.split("").forEach((yao, idx) => {
    if (yao === "0") {
      drawYing(positionY[idx]);
    } else if (yao === "1") {
      drawYang(positionY[idx]);
    } else {
      throw "drawGua";
    }
  });
};
const drawMainYao = (arg: {
  rc: RoughCanvas;
  mainYao: number;
  positionY: number[];
  x: number;
  width: number;
}) => {
  const { rc, mainYao, positionY, x, width } = arg;
  const middleY = (positionY[0] + positionY[positionY.length - 1]) / 2;
  const guaHeight = positionY[0] - positionY[positionY.length - 1] + 5;
  if (mainYao) {
    rc.ellipse(
      x + width / 2,
      positionY[mainYao - 1] + YAO_HEIGHT / 2,
      width + 10,
      YAO_HEIGHT + 10,
      {
        stroke: "darkseagreen",
      }
    );
    rc.line(
      x + width + 10,
      positionY[mainYao - 1] + YAO_HEIGHT / 2,
      width * 3 - 10,
      middleY,
      {
        stroke: "darkseagreen",
      }
    );
  } else {
    rc.line(x + width + 10, middleY, width * 3 - 10, middleY, {
      stroke: "darkseagreen",
    });
  }
  const rectLayout = {
    left: width * 3,
    top: positionY[positionY.length - 1] - 10,
    width: width * 2.8,
    height: guaHeight + 20,
  };
  rc.rectangle(
    rectLayout.left,
    rectLayout.top,
    rectLayout.width,
    rectLayout.height,
    {
      stroke: "darkseagreen",
    }
  );
  return rectLayout;
};
const clearCanvas = (c: HTMLCanvasElement) => {
  const { width, height } = c.getBoundingClientRect();
  const ctx = c.getContext("2d");
  ctx?.clearRect(0, 0, width, height);
};
export default defineComponent({
  name: "GuaView",
  setup() {
    const refContainer = ref<HTMLDivElement>();
    const refRoughView = ref<HTMLCanvasElement>();
    onMounted(() => {
      const containerRect = refContainer.value?.getBoundingClientRect();
      if (!containerRect) return;
      const { width, height } = containerRect;
      refRoughView.value?.setAttribute("width", `${width}`);
      refRoughView.value?.setAttribute("height", `${height}`);
    });
    const store = useStore();
    const contentBox = ref<ContentBox[]>([]);
    const clearContent = () => {
      contentBox.value = [];
      if (refRoughView.value) {
        clearCanvas(refRoughView.value);
      }
    };
    const generateGua: GenerateGua = ({
      totalTrans,
      oYao,
      oGuaId,
      tGuaId,
      isUseO,
      isUseT,
      yaoIdList,
    }) => {
      clearContent();
      if (
        oGuaId.length !== 6 ||
        tGuaId.length !== 6 ||
        (yaoIdList.length !== 1 && yaoIdList.length !== 2)
      ) {
        window.alert("error: 找旦旦提个bug吧~");
        return;
      }
      console.log({
        totalTrans,
        oYao,
        oGuaId,
        tGuaId,
        isUseO,
        isUseT,
        yaoIdList,
      });
      /* ************************************* */
      const containerRect = refContainer.value?.getBoundingClientRect();
      if (!containerRect) {
        window.alert("error: 找旦旦提个bug吧~");
        return;
      }
      if (!refRoughView.value) {
        window.alert("error: 找旦旦提个bug吧~");
        return;
      }
      const rc = rough.canvas(refRoughView.value);
      const { width: containerWidth } = containerRect;
      const guaWidth = containerWidth / 6;
      const drawYing = genDrawYing({
        x: 10,
        width: guaWidth,
        spacing: guaWidth / 5,
        rc,
      });
      const drawYang = genDrawYang({
        x: 10,
        width: guaWidth,
        rc,
      });
      if (yaoIdList.length === 1) {
        yaoIdList.forEach((item) => {
          const curGua = store.getters.getGuaById(item[0]);
          drawGua({
            guaId: curGua.id,
            positionY: guaYaoPositionY["1"],
            drawYing,
            drawYang,
          });
          const mainYao = Number(item[1]);
          const layout = drawMainYao({
            rc,
            mainYao,
            positionY: guaYaoPositionY["1"],
            x: 10,
            width: guaWidth,
          });
          contentBox.value.push({
            layout,
            children: `${curGua.name} => ${curGua.info[item[1]]}`,
          });
        });
      } else if (yaoIdList.length === 2) {
        yaoIdList.forEach((item, index) => {
          const curGua = store.getters.getGuaById(item[0]);
          drawGua({
            guaId: curGua.id,
            positionY: guaYaoPositionY["2"][index],
            drawYing,
            drawYang,
          });
          const mainYao = Number(item[1]);
          const layout = drawMainYao({
            rc,
            mainYao,
            positionY: guaYaoPositionY["2"][index],
            x: 10,
            width: guaWidth,
          });
          contentBox.value.push({
            layout,
            children: `${index ? "辅" : "主"}: ${curGua.name} => ${
              curGua.info[item[1]]
            }`,
          });
        });
      } else {
        window.alert("error: 找旦旦提个bug吧~");
      }
    };
    return {
      refContainer,
      refRoughView,
      contentBox,
      generateGua,
      clearContent,
    };
  },
});
</script>

<style scoped lang="scss">
.h200px {
  height: 200px;
}
.border-box {
  box-sizing: border-box;
}
.df {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.aic {
  align-items: center;
}
.jcc {
  justify-content: center;
}
.pr {
  position: relative;
}
.pa {
  position: absolute;
}
.tal {
  text-align: left;
}
.plr-4px {
  padding-left: 4px;
  padding-right: 4px;
}
.lh-16px {
  line-height: 16px;
}
</style>
