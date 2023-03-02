<template>
    <div class="chat-window">
        <div v-if="error">{{ error }}</div>
        <div v-if="documents" ref="messages" class="messages">
            <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
                <span class="created-at">{{ doc.createdAt }}</span>
                <span class="name">{{ doc.name }}</span>
                <span class="message">{{ doc.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import getCollection from '@/composables/getCollection'
import { computed, onMounted, onUpdated, ref } from '@vue/runtime-core'
import { formatDistanceToNow } from 'date-fns'

export default {
    setup() {
        const messages = ref(null)
        const { documents, error } = getCollection('messages')
        const formattedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map((doc) => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return { ...doc, createdAt: time }
                })
            }
        })

        onUpdated(() => {
            messages.value.scroll({
                top: messages.value.scrollHeight,
            })
        })

        return { documents, error, formattedDocuments, messages }
    },
}
</script>

<style>
.chat-window {
    background: #fafafa;
    padding: 30px 20px;
}
.single {
    margin: 18px 0;
}
.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name {
    font-weight: bold;
    margin-right: 6px;
}
.messages {
    max-height: 400px;
    overflow: auto;
}
</style>
