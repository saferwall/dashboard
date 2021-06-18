<template>
  <div
    class="activity md:grid items-center justify-center md:grid-cols-5 md:gap-4 bg-white my-3 md:rounded-xl"
  >
    <div class="header border text-center">
      <router-link class="profile-link" :to="`/user/${author.username}`">
        <avatar
          :username="author.username"
          :source="`//avatar.saferwall.com/${author.username}`"
        />
        <div class="info mt-3">
          <h3 class="text-xl font-bold">{{ author.username }}</h3>
          <p class="text-gray">Member since {{ getJoinedAgo }}</p>
        </div>
      </router-link>
      <div class="buttons mt-3" v-if="notSelfUser">
        <button
          @click="toggleFollow"
          :class="follow ? 'active' : ''"
          class="follow inline-grid font-bold text-primary border rounded-md border-gray py-2 w-max px-6 cursor-pointer"
        >
          {{ follow ? "UnFollow" : "Follow" }}
        </button>
      </div>
    </div>
    <div class="activity-content col-span-4 grid md:grid-cols-4">
      <div class="info col-span-3 mr-10">
        <router-link :to="getFileSummaryRoute">
          <p class="title">
            <b>{{ author.username }}</b> {{ getActivityTitle }} a file
            <span class="text-sm">{{ getActivityTimeAgo }} ago</span>
          </p>
          <hash-input :hash="file.sha256" class="mt-4"></hash-input>
        </router-link>
        <file-meta
          :filename="file.name"
          :classification="getClassification"
          :scan="file.scan"
        />
      </div>
      <div class="tags">
        <h3>Tags</h3>
        <ul class="list flex flex-wrap">
          <li
            v-for="tag in getTags"
            v-bind:key="tag.link"
            :class="tag.avg && `redbg`"
          >
            <router-link :to="`/tag/${tag.name}`" :title="tag.name">{{
              tag.name
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { timeAgoCounts, timeAgo, isAnAVG } from "@/common/functions";
import { followActions, userGetters } from "@/state/helpers";
import { getClass } from "@/common/classification";

import HashInput from "./HashInput.vue";
import FileMeta from "./FileMeta.vue";
import Avatar from "./Avatar.vue";

export default {
  components: {
    HashInput,
    Avatar,
    FileMeta,
  },
  props: {
    author: {
      default: function () {
        return {
          username: null,
          member_since: 0,
        };
      },
      type: Object,
    },
    file: {
      default: function () {
        return {
          shae256: null,
          name: null,
          classification: null,
          score: {
            value: 0,
            total: 0,
          },
          tags: [],
        };
      },
      type: Object,
    },
    activity_date: {
      default: null,
      type: [String, Number],
    },
    follow: {
      default: true,
      type: Boolean,
    },
    type: {
      default: "submit",
      type: String,
    },
  },
  computed: {
    ...userGetters,
    getActivityTimeAgo() {
      return timeAgoCounts(this.activity_date);
    },
    getJoinedAgo() {
      return timeAgo(this.author.member_since);
    },
    getActivityTitle() {
      let typeActivity = [
        { key: "like", title: "Liked" },
        { key: "submit", title: "Submitted" },
        { key: "follow", title: "Followed" },
        { key: "comment", title: "Commented" },
      ].find((type) => {
        return type.key == this.type;
      });
      return (typeActivity && typeActivity.title) || "Unknown";
    },
    getTags() {
      let tags = this.file.tags;
      let tagkeys = Object.keys(tags || {}) || [];
      return tagkeys.reduce((_tags, tagkey) => {
        return [
          ..._tags,
          ...(tags[tagkey].map((tag) => {
            return {
              name: tag,
              avg: isAnAVG(tagkey),
            };
          }) || []),
        ];
      }, []);
    },
    notSelfUser() {
      return this.author.username !== this.getUser && this.getUser.username;
    },
    getClassification() {
      return getClass(this.file.classification);
    },
    getFileSummaryRoute() {
      return `/file/${this.file.sha256}/summary`;
    },
  },
  methods: {
    ...followActions,
    toggleFollow() {
      if (this.followed) return this.doUnFollow({ id: this.author.username });
      this.doFollow({ id: this.author.username });
    },
  },
};
</script>

<style lang="scss" scoped>
.activity {
  > * {
    @apply py-4 px-6 md:p-10;
  }
  .header {
    @apply flex flex-wrap w-full justify-between md:justify-center flex-grow border-none;

    .profile-link {
      @apply flex space-x-4 md:block md:space-x-0;
    }
  }
  .activity-content {
    @apply my-3 break-all;

    &,
    .tags {
      @apply border-l-0 md:border-l md:border-gray md:border-opacity-10;
    }

    .info {
      .title span {
        @apply text-gray;
      }
    }

    .tags {
      @apply mt-8 mx-0 px-0 md:px-4 w-full;
      .list li {
        @apply flex py-1 px-2 bg-blue-500 m-1 rounded text-light;

        &.redbg {
          @apply bg-red-500;
        }
      }
    }
  }
  .buttons {
    .follow {
      border-color: #dedede;
      &.active {
        @apply bg-primary bg-opacity-10 border-none;
      }
    }
  }
}
</style>