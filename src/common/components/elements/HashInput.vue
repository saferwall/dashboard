<template>
  <div class="hashinput">
    <svg
      class="my-auto mr-3"
      xmlns="http://www.w3.org/2000/svg"
      width="14.713"
      height="16.211"
      viewBox="0 0 14.713 16.211"
    >
      <g id="clip" transform="translate(0.15 0.15)">
        <path
          d="M18.538,13.447a.561.561,0,0,0-.794-.794l-2.97,2.97a2.652,2.652,0,0,0,3.75,3.75l6.707-6.707a3.7,3.7,0,0,0-5.242-5.228L13.3,14.131a4.762,4.762,0,1,0,6.734,6.734L23,17.9a.561.561,0,1,0-.794-.794l-2.97,2.97a3.639,3.639,0,1,1-5.146-5.146l6.693-6.693a2.546,2.546,0,0,1,1.82-.753,2.58,2.58,0,0,1,1.82.753,2.546,2.546,0,0,1,.753,1.82,2.58,2.58,0,0,1-.753,1.82l-6.707,6.707a1.545,1.545,0,0,1-2.163,0,1.52,1.52,0,0,1,0-2.163l2.984-2.97Z"
          transform="translate(-11.9 -6.35)"
          fill="#a4a4a5"
          stroke="#a4a4a5"
          stroke-width="0.3"
        />
      </g>
    </svg>
    <input
      type="text"
      @focus="$event.target.select()"
      class="w-full h-full"
      :value="hash"
      readonly
    />
  </div>
</template>

<script>
export default {
  props: {
    hash: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.hashinput {
  @apply flex px-4 h-11 bg-gray rounded-full;

  &,
  input {
    @apply cursor-pointer;
    @apply focus:outline-none bg-gray bg-gray-2xlight;
  }
}
</style>