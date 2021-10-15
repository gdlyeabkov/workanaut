<template>
    <div>
        <div class="backgroundForm">
            <div class="registerForm">
                <span>
                    Введите email или номер мобильного телефона, который вы использовали для входа на сайт.
                </span>
                <input placeholder="Email или телефон" type="text" class="form-control newPassword"  v-model="employerPhone" />
                <div class="actions">
                    <button @click="setPassword()" class="btn btn-primary w-100">
                        Задать пароль
                    </button>
                </div>
            </div>
            <span class="drm">
                © 2021 Группа компаний Workanaut
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EmployerRegister',
    data(){
        return {
            employerPhone: '',
        }
    },
    mounted(){
        if(this.$route.query.email !== null && this.$route.query.email !== undefined) {
            this.employerPhone = this.$route.query.email
        }
    },
    methods: {
        setPassword(){
            fetch(`http://localhost:4000/api/employers/password/set/?employerphone=${this.employerPhone}`, {
                mode: 'cors',
                method: 'GET'
            }).then(response => response.body).then(rb  => {
                const reader = rb.getReader()
                return new ReadableStream({
                start(controller) {
                    function push() {
                    reader.read().then( ({done, value}) => {
                        if (done) {
                        console.log('done', done);
                        controller.close();
                        return;
                        }
                        controller.enqueue(value);
                        console.log(done, value);
                        push();
                    })
                    }
                    push();
                }
                });
            }).then(stream => {
                return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
            })
            .then(result => {
                console.log(`JSON.parse(result): ${JSON.parse(result)}`)
                if(JSON.parse(result).status.includes('OK')){
                    alert(`Задан новый пароль: ${JSON.parse(result).newPassword}`)
                    this.$router.push({ name: 'Login', query: { logintype: 'employer' } })
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Ошикбка задания нового пароля')
                    
                }
            })
        }
    }
}
</script>

<style scoped>
    
    .registerForm {
        margin: auto;
        width: 375px;
        box-sizing: border-box;
        padding: 15px;
        background-color: rgb(245, 245, 245);
    }

    .alreadyRegister {
        color: rgb(0, 0, 255);
        cursor: pointer;
    }

    .actions {
        display: flex;
        flex-direction: column;
    }

    .backgroundForm {
        box-sizing: border-box;
        padding: 15px;
        min-height: 750px;
        background-image: url('https://s3.nat-geo.ru/images/2020/6/4/c742c0414bf24c33a9ff2f67541ded02.max-2500x1500.jpg');
    }

    .newPassword {
        margin: 15px 0px;
    }

    .drm {
        color: rgb(150, 150, 150);
        text-align: center;
        margin-top: 35px;
        display: block;
    }

</style>