<template>
    <div class="container">
        <Navbar />
        <ChatWindow />
        <NewChatForm />
    </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import Navbar from '../components/Navbar.vue'
import router from '@/router'
import getUser from '@/composables/getUser'
import NewChatForm from '@/components/NewChatForm.vue'
import ChatWindow from '@/components/ChatWindow.vue'

export default {
    components: { Navbar, NewChatForm, ChatWindow },
    setup() {
        const { user } = getUser()

        watch(user, () => {
            if (!user.value) {
                router.push({ name: 'Welcome' })
            }
        })

        return {}
    },
}
</script>

<style></style>
