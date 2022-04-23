<template>
  <div>
    <p v-for="(item, idx) in calContent" :key="idx">
      {{ item }}
    </p>
  </div>
</template>

<script lang="ts">
import type { GuaInfo } from "@/types/common";
type GenerateGua = (arg: GuaInfo) => void;
import { useStore } from "vuex";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "GuaView",
  setup() {
    const store = useStore();
    const content = ref<string[]>([]);
    const calContent = computed(() =>
      content.value.length === 1
        ? content.value
        : content.value.map((text, idx) => {
            if (idx === 0) {
              return `主: ${text}`;
            } else if (idx === 1) {
              return `辅: ${text}`;
            }
          })
    );
    const generateGua: GenerateGua = ({
      totalTrans,
      oYao,
      oGuaId,
      tGuaId,
      isUseO,
      isUseT,
      yaoIdList,
    }) => {
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
      content.value = yaoIdList.map((item) => {
        const curGua = store.getters.getGuaById(item[0]);
        return curGua.info[item[1]];
      });
    };
    return {
      calContent,
      generateGua,
    };
  },
});
</script>

<style scoped></style>
