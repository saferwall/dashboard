<template>
    <div class="form-group justify-end">
        <input autocomplete="password" @input="$emit('update:modelValue', $event.target.value)" :type="visible ? 'password' : 'text'" :name="name" class="form-input" :placeholder="placeholder" :required="required">
        <span @click="visible = !visible" class="show absolute  mx-3 py-3 pt-4 cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26.231" height="22" class="fill-current text-gray" viewBox="0 0 26.231 22"> 
                <use :href="require('@/assets/images/svg/eye.svg') + '#' + (visible ? 'on': 'off')" />
            </svg>
        </span>
    </div>
</template>
 

<script>
export default {
    props : {
        name : {
            type: String,
            default : 'password'
        },
        placeholder : {
            type: String,
            default : 'Password'
        },
        required :{
            type: Boolean,
            default: false,
        },
        modelValue: {
            default: null,
            required: true
        }
    },
    emits: [ 'update:modelValue' ],
    data(){
        return {
            visible : true
        }
    }
}
</script>