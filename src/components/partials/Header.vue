<template>
  <nav class="navbar z-40">
    <div class="nav-content">
      <div class="logo">
        <logo />
      </div>
      <div class="search">
        <input
          class="input"
          name="search"
          placeholder="Quik file hash lookup"
        />
        <button class="button">
          <svg
            class="inline"
            xmlns="http://www.w3.org/2000/svg"
            width="19.587"
            height="19.591"
            viewBox="0 0 19.587 19.591"
          >
            <path
              id="Search"
              d="M18.774,17.928l-4.591-4.591a8.061,8.061,0,1,0-.8.8l4.591,4.591a.569.569,0,0,0,.4.168.552.552,0,0,0,.4-.168A.566.566,0,0,0,18.774,17.928ZM1.177,8.055A6.924,6.924,0,1,1,8.1,14.983,6.932,6.932,0,0,1,1.177,8.055Z"
              transform="translate(0.3 0.35)"
              fill="#bfbfbf"
              stroke="#bfbfbf"
              stroke-width="0.7"
            />
          </svg>
        </button>
      </div>
      <div class="menu">
        <div class="menu-content ">
          <router-link to="/hot-activities" class="btn-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
              width="15.3444"
              height="19.1412"
              viewBox="0 0 12.787 15.951"
            >
              <path
                id="Tracé_23"
                data-name="Tracé 23"
                d="M61.749,5.532a17.229,17.229,0,0,1-2.534-3.567A8.212,8.212,0,0,1,58.6.52L58.464,0l-.491.219A4.905,4.905,0,0,0,55.8,2.383a4.948,4.948,0,0,0-.455,2.191.705.705,0,0,1-1.2.5l-.914-.914-.315.434c-.033.045-.8,1.105-.941,1.317A6.244,6.244,0,1,0,63.427,9.349,5.934,5.934,0,0,0,61.749,5.532Zm-4.566,9.146a5.33,5.33,0,0,1-4.45-8.262c.071-.108.357-.506.6-.85l.156.156a1.62,1.62,0,0,0,2.765-1.153,4.039,4.039,0,0,1,.358-1.777,4.035,4.035,0,0,1,1.293-1.476,16.323,16.323,0,0,0,3.161,4.83,5.206,5.206,0,0,1,1.441,3.2A5.335,5.335,0,0,1,57.184,14.678Z"
                transform="translate(-50.79 0.209)"
                fill="#898989"
                stroke="#898989"
                stroke-width="0.3"
              />
            </svg>

            Hot activities
          </router-link>
          <router-link to="/" class="btn-menu btn-login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 mt-1"
              width="20.063"
              height="20.062"
              viewBox="0 0 20.063 20.062"
            >
              <g transform="translate(0)">
                <path
                  d="M8.568,209.254H.627a.627.627,0,0,1,0-1.254H8.568a.627.627,0,0,1,0,1.254Zm0,0"
                  transform="translate(0 -199.85)"
                  fill="#0d9677"
                />
                <path
                  d="M123.3,135.508a.627.627,0,0,1-.443-1.071l2.692-2.692-2.692-2.691a.627.627,0,0,1,.887-.887l3.135,3.135a.627.627,0,0,1,0,.887l-3.135,3.135A.626.626,0,0,1,123.3,135.508Zm0,0"
                  transform="translate(-117.865 -122.969)"
                  fill="#0d9677"
                />
                <path
                  d="M300.34,20.142a1.673,1.673,0,0,1-1.672-1.672V3.423A1.682,1.682,0,0,1,299.8,1.836L304.822.162a1.689,1.689,0,0,1,2.205,1.59V16.8a1.683,1.683,0,0,1-1.131,1.587l-5.024,1.675A1.749,1.749,0,0,1,300.34,20.142Zm5.016-18.809a.491.491,0,0,0-.15.022l-5,1.668a.431.431,0,0,0-.283.4V18.47a.44.44,0,0,0,.568.4l5-1.668a.432.432,0,0,0,.283-.4V1.752A.419.419,0,0,0,305.355,1.334Zm0,0"
                  transform="translate(-286.965 -0.08)"
                  fill="#0d9677"
                />
                <path
                  d="M171.295,4.18a.627.627,0,0,1-.627-.627V2.3a2.3,2.3,0,0,1,2.3-2.3h9.4a.627.627,0,0,1,0,1.254h-9.4A1.046,1.046,0,0,0,171.922,2.3V3.553A.627.627,0,0,1,171.295,4.18Zm0,0"
                  transform="translate(-163.98)"
                  fill="#0d9677"
                />
                <path
                  d="M176.311,345.512h-3.344a2.3,2.3,0,0,1-2.3-2.3v-1.254a.627.627,0,0,1,1.254,0v1.254a1.046,1.046,0,0,0,1.045,1.045h3.344a.627.627,0,0,1,0,1.254Zm0,0"
                  transform="translate(-163.98 -327.957)"
                  fill="#0d9677"
                />
              </g>
            </svg>
            Login
          </router-link>
          <router-link to="/" class="btn-menu btn-signup">Sign up</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "../shared/elements/Logo.vue";
export default {
  name: "Header",
  components: { Logo },
};
</script>

<style lang="scss">
.navbar {
  @apply bg-white fixed w-full top-0 h-navbar;
  border-bottom: 1px solid $border-color;

  .nav-content {
    @apply mx-auto flex h-full flex-wrap;

    .logo {
      @apply w-full md:w-sidebar md:px-6 px-5 flex justify-center md:justify-start text-black font-extrabold;
      border-right: 1px solid $border-color;
      height: 100%;
    }

    .search {
      @apply flex hidden md:flex md:w-3/12 sm:w-min;

      .input {
        @apply md:w-8/12 sm:w-min h-full px-6 focus:outline-none;
      }

      .button {
        @apply h-full md:w-4/12 sm:w-min px-6 focus:outline-none flex items-center content-center;
        display: block;
      }
    }

    .menu {
      @apply flex items-center w-full h-full ml-auto content-center w-max sm:justify-end hidden md:flex;

      .menu-content {
        @apply lg:flex lg:items-stretch lg:justify-end h-full;
      }
    }
  }
  .btn-menu {
    @apply relative py-2 px-4 leading-normal text-black no-underline flex items-center;

    color: $gray-color;
    justify-content: center;
    text-align: center;
    min-width: 100px;
    font-weight: 400;

    &.btn-signup {
      font-weight: 700;
      color: $light-color;
      background: $secondary-color;
    }

    &.btn-login {
      @apply px-6;

      &::before {
        content: " ";
        height: 51%;
        border-left: 1px solid $border-color;
        margin-top: 2%;
        margin-right: 15px;
        margin-left: -15px;
      }
      font-weight: 700;
      color: $secondary-color;
    }
  }
}
</style>
