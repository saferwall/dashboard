<template>
    <card-tab class="settings-information space-y-10" :active="active">
        <div class="si-avatar relative">
            <avatar width="120px" height="120px" />
            <span class="si-avatar-icon absolute bottom-0 left-20">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42">
                    <g id="PHOTO" transform="translate(-1035.623 -379.623)">
                        <g transform="translate(1035.623 379.623)" fill="#e8e8e8" stroke="#fff" stroke-width="3">
                            <circle cx="21" cy="21" r="21" stroke="none"/>
                            <circle cx="21" cy="21" r="19.5" fill="none"/>
                        </g>
                        <path d="M1.913,13A1.923,1.923,0,0,1,0,11.057V4.2A1.923,1.923,0,0,1,1.913,2.261h1.67L4.5.848A1.908,1.908,0,0,1,6.087,0H9.913A1.908,1.908,0,0,1,11.5.848l.922,1.413h1.67A1.923,1.923,0,0,1,16,4.2v6.853A1.923,1.923,0,0,1,14.087,13ZM3.687,7.03A4.313,4.313,0,1,0,8,2.667,4.346,4.346,0,0,0,3.687,7.03ZM12.539,4.4a.57.57,0,0,0,.539.6h.765a.556.556,0,0,0,.522-.6.568.568,0,0,0-.591-.548h-.7A.571.571,0,0,0,12.539,4.4ZM5.6,7.048A2.4,2.4,0,1,1,8,9.467,2.424,2.424,0,0,1,5.6,7.048Z" transform="translate(1048.623 393.623)" fill="#222"/>
                    </g>
                </svg>
            </span>
        </div>

        <div class="si-form flex flex-col space-y-4">
            <input-group id="name" title="Name">
                <custom-input name="name" placeholder="Name" />
            </input-group>
            <input-group id="bio" title="Bio">
                <custom-textarea name="bio" placeholder="Bio" />
            </input-group>
            <input-group id="location" title="Location">
                <custom-input name="location" placeholder="Location" />
            </input-group>
            <input-group id="url" title="Url">
                <custom-input name="url" placeholder="Url" />
            </input-group>

            <div class="si-group">
                <btn size="xl" class="active">
                    Save
                </btn>
            </div>
        </div>
    </card-tab>
</template>

<script>
import Avatar from '@/common/components/elements/Avatar.vue'
import CardTab from '@/common/components/elements/CardTab.vue'
import CustomInput from './elements/Input.vue'
import CustomTextarea from './elements/Textarea.vue'
import InputGroup from './elements/InputGroup.vue'
import Btn from '@/common/components/elements/button/Btn.vue'
export default {
    components: {
        CardTab,
        Avatar,
        CustomInput,
        CustomTextarea,
        InputGroup,
        Btn,
    },
    props:
        {
        active: {
            type: Boolean
        }
    }

}
</script>

<style lang="scss" scoped>
.settings-information{
    .si-avatar{
    }
}
</style>
