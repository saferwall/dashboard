<template>
  <div class="app-content h-full">
    <div class="header">
      <div class="metatime">
        <a class="btn-back" @click="goBack()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7.883"
            height="13.22"
            viewBox="0 0 7.883 13.22"
          >
            <path
              d="M3353.157,640.348l-5.973,5.973,5.973,5.973"
              transform="translate(-3345.911 -639.711)"
              fill="none"
              stroke="#0d9677"
              stroke-width="1.8"
            />
          </svg>

          back
        </a>
      </div>
      <div class="metainfo">
        <h1 class="title">
          {{ title }}
        </h1>
        <div class="buttons">
          <btn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.004"
              height="17.708"
              viewBox="0 0 19.004 17.708"
            >
              <path
                d="M14.81,9.36,9.252,14.529,3.694,9.36l1.022-.951,3.813,3.546V0H9.975V11.955l3.813-3.546Zm3.694,6.5H0v1.344H18.5Zm0,0"
                transform="translate(0.25 0.25)"
                fill="#0d9677"
                stroke="#0d9677"
                stroke-width="0.5"
              />
            </svg>

            Download File
          </btn>
          <btn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.684"
              height="17.383"
              viewBox="0 0 14.684 17.383"
            >
              <g transform="translate(0.15 0.212)">
                <g>
                  <path
                    d="M51.94,4.744a7.145,7.145,0,0,0-5.085-2.106H45.8l1.692-1.7L46.55,0l-3.3,3.3,3.253,3.307.95-.934L45.776,3.969h1.079a5.86,5.86,0,1,1-5.86,5.86V9.163H39.663v.666A7.192,7.192,0,1,0,51.94,4.744Z"
                    transform="translate(-39.663)"
                    fill="#0d9677"
                    stroke="#0d9677"
                    stroke-width="0.3"
                  />
                </g>
              </g>
            </svg>

            Rescan File
          </btn>
          <btn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.791"
              height="15.005"
              viewBox="0 0 16.791 15.005"
            >
              <path
                d="M8.1,14.4a.949.949,0,0,1-.626-.235c-.654-.572-1.285-1.109-1.841-1.583l0,0A34.241,34.241,0,0,1,1.606,8.81,6.026,6.026,0,0,1,0,4.866,5.06,5.06,0,0,1,1.284,1.41,4.354,4.354,0,0,1,4.523,0,4.072,4.072,0,0,1,7.067.878,5.2,5.2,0,0,1,8.1,1.952,5.205,5.205,0,0,1,9.124.878,4.072,4.072,0,0,1,11.668,0a4.354,4.354,0,0,1,3.239,1.41,5.06,5.06,0,0,1,1.284,3.456A6.026,6.026,0,0,1,14.585,8.81a34.233,34.233,0,0,1-4.019,3.773c-.557.475-1.189,1.013-1.844,1.586A.95.95,0,0,1,8.1,14.4ZM4.523.948a3.416,3.416,0,0,0-2.541,1.1A4.116,4.116,0,0,0,.948,4.866a5.071,5.071,0,0,0,1.388,3.34,33.694,33.694,0,0,0,3.9,3.656l0,0c.558.476,1.192,1.016,1.85,1.592.663-.577,1.3-1.118,1.856-1.594a33.7,33.7,0,0,0,3.9-3.656,5.071,5.071,0,0,0,1.388-3.34,4.116,4.116,0,0,0-1.033-2.813,3.415,3.415,0,0,0-2.541-1.1,3.145,3.145,0,0,0-1.964.68A4.6,4.6,0,0,0,8.61,2.895a.6.6,0,0,1-1.028,0A4.6,4.6,0,0,0,6.487,1.628,3.145,3.145,0,0,0,4.523.948Zm0,0"
                transform="translate(0.3 0.3)"
                fill="#0d9677"
                stroke="#0d9677"
                stroke-width="0.6"
              />
            </svg>

            Like
          </btn>
          <btn>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.786"
              height="16.889"
              viewBox="0 0 20.786 16.889"
            >
              <g transform="translate(0 -48)">
                <g  transform="translate(0 48)">
                  <path
                    d="M20.786,50a8.885,8.885,0,0,1-2.455.673,4.237,4.237,0,0,0,1.875-2.355,8.516,8.516,0,0,1-2.7,1.032,4.261,4.261,0,0,0-7.371,2.914,4.388,4.388,0,0,0,.1.972,12.062,12.062,0,0,1-8.784-4.457,4.263,4.263,0,0,0,1.31,5.7,4.208,4.208,0,0,1-1.925-.525v.047a4.281,4.281,0,0,0,3.414,4.187,4.253,4.253,0,0,1-1.117.14,3.768,3.768,0,0,1-.807-.073A4.3,4.3,0,0,0,6.3,61.218,8.562,8.562,0,0,1,1.02,63.035,7.982,7.982,0,0,1,0,62.977a12,12,0,0,0,6.537,1.912A12.045,12.045,0,0,0,18.666,52.763c0-.188-.006-.37-.016-.551A8.5,8.5,0,0,0,20.786,50Z"
                    transform="translate(0 -48)"
                    fill="#0d9677"
                  />
                </g>
              </g>
            </svg>

            Share
          </btn>
        </div>
      </div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import Btn from "@/common/components/elements/button/Btn.vue";
export default {
  components: { Btn },
  props: {
    title: {
      default: "Summary",
      type: String,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
.app-content {
  @apply md:w-9/12 lg:w-8/12 m-auto mx-40 pt-32 pb-10;

  .header {
    @apply flex flex-wrap;

    svg {
      @apply mr-2;
    }

    .btn-back {
      @apply flex items-center text-primary font-bold capitalize cursor-pointer;
    }

    .metatime {
      @apply w-full;
    }

    .metainfo {
      @apply grid grid-cols-3 gap-4 py-2 mt-8 w-full;

      .title {
        @apply text-3xl col-span-1;
      }

      .buttons {
        @apply flex justify-end col-span-2;

        .btn {
          @apply ml-2 bg-light border-none font-semibold rounded-md shadow-sm;
          height: 50px;
        }
      }
    }
    .buttons {
      .btn {
        &:hover {
        }
      }
    }
  }

  .content {
    @apply mt-8;
  }
}
</style>
