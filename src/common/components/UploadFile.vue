<template>
    <div class="uploadfile shadow">
        <h1 class="welcome mt-8 ml-10 mb-auto w-full">
            Welcome to Saferwall !
        </h1>
        <div class="upload"  >
            <input v-bind="getInputProps()"  class="hide">
            <button class="btn-upload" v-bind="getRootProps()">
                Browse Files 

                <svg xmlns="http://www.w3.org/2000/svg" class="ml-4" width="33.303" height="25.533" viewBox="0 0 33.303 25.533">
                    <g style="isolation: isolate">
                        <g transform="translate(0 0)">
                            <path d="M27.748,63.462A11.472,11.472,0,0,0,13.858,55.37a11.227,11.227,0,0,0-8.63,10A6.1,6.1,0,0,0,.084,72.349a6.2,6.2,0,0,0,6.185,5.087h5.2V75.411h-5.2a4.052,4.052,0,1,1,0-8.1A1.027,1.027,0,0,0,7.31,66.3a9.242,9.242,0,0,1,9.356-9.123,9.3,9.3,0,0,1,9.2,7.351,1.029,1.029,0,0,0,.885.81,5.088,5.088,0,0,1,4.418,5.726,5.159,5.159,0,0,1-5.125,4.349H21.879v2.025h4.162a7.071,7.071,0,0,0,1.707-13.974Z" transform="translate(0 -55.032)" fill="#fff"/>
                            <path d="M185.206,249.314l-4.171,4.171,1.47,1.47,2.4-2.388v10h2.086v-10l2.388,2.388,1.47-1.47-4.171-4.171A1.043,1.043,0,0,0,185.206,249.314Z" transform="translate(-169.271 -237.036)" fill="#fff"/>
                        </g>
                    </g>
                </svg>
            </button>
            <div class="progress">
                <k-progress class="k" active active-color="white" color="#0d9677" :percent="100" status="success" :line-height="8" :show-text="false"></k-progress>
                <p class="text">
                    Upload in progress <strong>(<span class="value">86</span>%)</strong>
                </p>
            </div>
            <div class="messages">
                <div v-if="isDragReject" id="isDragReject">
                    isDragReject: {{ isDragReject }}
                </div>
            </div>
        </div>
        <p class="terms">
            By using Saferwall you consent to our <a target="_blank" href="https://about.saferwall.com/tos">Terms of Service</a> and <a href="https://about.saferwall.com/privacy">Privacy Policy</a> and allow us to share 
            your submission with the security community. <a href="#">Learn more</a>
        </p>
    </div>
</template>

<script>
import { useDropzone } from 'vue3-dropzone'
export default {
  setup() {
    function onDrop(acceptFiles, rejectReasons) {
      console.log(acceptFiles)
      console.log(rejectReasons)
    }

    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop })

    return {
      getRootProps,
      getInputProps,
      ...rest
    }
  }
}
</script>



<style lang="scss" >
.uploadfile{
    @apply md:mt-14 flex flex-wrap mx-auto rounded-lg bg-white  w-full min-h-7/10;

    .hide {
        @apply hidden;
    }    
    a{
        color: $text-color;
    }
    .welcome {
        @apply text-xl font-bold;
    }
    .btn-upload{
        @apply focus:outline-none flex bg-primary text-white py-5 px-6 rounded-md  m-auto;
        font-weight : 600;
    }
    .btn-disabled{
        @apply bg-gray opacity-30;
    }

    .upload {
        @apply  w-full m-auto;
    }

    .progress{
        @apply m-auto my-8 w-7/12 block;

        .k-progress-outer{
            padding: 0 !important;
            margin: 0 !important;
            width: 100%;
        }

        .text{
            @apply mx-auto mt-3 w-max;
        }
    }

    .terms {
        @apply text-sm text-center w-8/12 mb-10 mt-auto mx-auto;
    }
}
</style>