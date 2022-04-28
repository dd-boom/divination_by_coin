<template>
  <div class="home">
    <NCard title="其实就是填一些东西再从《周易》里找一些东西">
      <div class="df flex-col">
        <div class="min-height-100px border-box">
          <GuaView ref="guaViewRef" />
        </div>
        <div>
          <NSpace size="large" vertical>
            <div class="pt30px">
              同时掷三枚硬币, 记
              <mark>背面朝上</mark>
              的硬币个数, 填入下表, 共掷六次
            </div>
            <NButtonGroup size="small">
              <NButton secondary round type="primary" @click="handleGenerate">
                成卦
              </NButton>
              <NButton secondary round @click="handleReset"> 重置 </NButton>
            </NButtonGroup>
            <div>请填写每掷<mark>背面朝上</mark>的硬币个数:</div>
            <div>
              <template v-for="(yao, idx) in curYaoList" :key="idx">
                <span
                  class="cursor-default"
                  title="同时掷三个铜钱, 记录背面朝上的铜钱个数, 为一爻"
                >
                  [第{{ nzhcn.encodeS(idx + 1) }}掷] {{ yaoLabelList[idx] }} :
                </span>
                <NRadioGroup v-model:value="curYaoList[idx]">
                  <NRadio value="0">0</NRadio>
                  <NRadio value="1">1</NRadio>
                  <NRadio value="2">2</NRadio>
                  <NRadio value="3">3</NRadio>
                </NRadioGroup>
                <span style="margin-left: 10px">
                  [ {{ curOriginYaoLabelList[idx] }} ]
                </span>
                <br />
              </template>
            </div>
            <div class="pt30px">或者你懒得掷硬币也可以使用"随机成卦"(笑)</div>
            <NButton
              type="primary"
              size="small"
              round
              tertiary
              @click="handleEasyGenerate"
            >
              随机成卦
            </NButton>
          </NSpace>
        </div>
      </div>
    </NCard>
  </div>
</template>

<script lang="ts">
import type { GuaInfo, Yao } from "@/types/common";
import { YY } from "@/types/common";
import { defineComponent, ref, computed } from "vue";
import Nzh from "nzh";
import {
  NCard,
  NRadioGroup,
  NRadio,
  NButton,
  NButtonGroup,
  NSpace,
} from "naive-ui";
import GuaView from "@/components/GuaView.vue";

const { cn: nzhcn } = Nzh;

const yaoLabelList = ["初爻", "二爻", "三爻", "四爻", "五爻", "上爻"];
type Yy2Label = (yy: YY) => "六" | "九";
const yy2Label: Yy2Label = (yy) => (yy === YY.ying ? "六" : "九");

const dropIcon = () => Math.random() >= 0.5;
const drop3Icon = () => new Array(3).fill(false).map(() => dropIcon());

export default defineComponent({
  name: "HomeView",
  components: {
    GuaView,
    NCard,
    NRadioGroup,
    NRadio,
    NButton,
    NButtonGroup,
    NSpace,
  },
  setup() {
    const guaViewRef = ref<InstanceType<typeof GuaView>>();
    const curYaoList = ref<Yao[]>(["0", "0", "0", "0", "0", "0"]);
    const calCurYaoList = computed(() =>
      curYaoList.value.map((item, idx) => ({
        yao: item,
        yaoIdx: idx + 1,
        oYy: item === "0" || item === "2" ? YY.ying : YY.yang,
        tYy: item === "3" || item === "2" ? YY.ying : YY.yang,
        isT: item === "0" || item === "3",
      }))
    );
    const curOriginYaoLabelList = computed(() =>
      calCurYaoList.value.map(({ oYy }, idx) => {
        const curValue = yy2Label(oYy);
        let curRes: string;
        if (idx === 0) {
          curRes = `初${curValue}`;
        } else if (idx === 5) {
          curRes = `上${curValue}`;
        } else {
          curRes = `${curValue}${nzhcn.encodeS(idx + 1)}`;
        }
        return curRes;
      })
    );
    const handleReset = () => {
      curYaoList.value = ["0", "0", "0", "0", "0", "0"];
      guaViewRef.value?.clearContent();
    };
    /* ***********start: generate gua**************** */
    const handleGenerate = () => {
      console.log(calCurYaoList.value);
      const totalTrans = calCurYaoList.value.filter(({ isT }) => isT).length;
      const oGuaId = calCurYaoList.value.map(({ oYy }) => oYy).join("");
      const tGuaId = calCurYaoList.value.map(({ tYy }) => tYy).join("");
      const guaInfo: GuaInfo = {
        totalTrans,
        oYao: calCurYaoList.value.map(({ yao }) => yao),
        oGuaId,
        tGuaId,
        isUseO: totalTrans <= 4,
        isUseT: totalTrans === 3 || totalTrans >= 5,
        yaoIdList: [] as [string, string][],
      };
      if (totalTrans === 0) {
        guaInfo.yaoIdList = [[oGuaId, "0"]];
      } else if (totalTrans === 1) {
        guaInfo.yaoIdList = [
          [oGuaId, `${calCurYaoList.value.find(({ isT }) => isT)?.yaoIdx}`],
        ];
      } else if (totalTrans === 2) {
        guaInfo.yaoIdList = calCurYaoList.value
          .filter(({ isT }) => isT)
          .sort((a, b) => b.yaoIdx - a.yaoIdx)
          .map(({ yaoIdx }) => [oGuaId, `${yaoIdx}`]);
      } else if (totalTrans === 3) {
        guaInfo.yaoIdList = [
          [oGuaId, "0"],
          [tGuaId, "0"],
        ];
      } else if (totalTrans === 4) {
        guaInfo.yaoIdList = calCurYaoList.value
          .filter(({ isT }) => !isT)
          .sort((a, b) => a.yaoIdx - b.yaoIdx)
          .map(({ yaoIdx }) => [oGuaId, `${yaoIdx}`]);
      } else if (totalTrans === 5) {
        guaInfo.yaoIdList = [
          [tGuaId, `${calCurYaoList.value.find(({ isT }) => !isT)?.yaoIdx}`],
        ];
      } else if (totalTrans === 6) {
        guaInfo.yaoIdList = [[tGuaId, "0"]];
      } else {
        window.alert("error: 找旦旦提个bug吧~");
        return;
      }
      console.log(totalTrans);
      guaViewRef.value?.generateGua(guaInfo);
    };
    /* ***********end: generate gua**************** */
    const handleEasyGenerate = () => {
      curYaoList.value = new Array(6)
        .fill("")
        .map(() => `${drop3Icon().filter((e) => !e).length}` as Yao);
      handleGenerate();
    };
    return {
      yaoLabelList,
      curYaoList,
      curOriginYaoLabelList,
      handleReset,
      guaViewRef,
      handleGenerate,
      handleEasyGenerate,
      nzhcn,
    };
  },
});
</script>

<style scoped lang="scss">
.home {
  max-width: 1200px;
  margin: 0 auto;
  mark {
    background-color: #daf0e4;
  }
}
.min-height-100px {
  min-height: 100px;
}
.df {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.ac {
  align-items: center;
}

.cursor-default {
  cursor: default;
}
.border-box {
  border: 1px dashed #58bc58;
  margin-left: 10px;
  margin-right: 10px;
}
.pt30px {
  padding-top: 30px;
}
</style>
