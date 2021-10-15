<template>
    <div>
        <div class="backgroundForm">
            <div class="registerForm">
                <h4>
                    Регистрация работадателя
                </h4>
                <h5>
                    Имя
                </h5>
                <input type="text" class="form-control"  v-model="employerName" />
                <h5>
                    Фамилия
                </h5>
                <input type="text" class="form-control"  v-model="employerSecondName" />
                <h5>
                    phone
                </h5>
                <input type="phone" class="form-control"  v-model="employerPhone" />
                <h5>
                    email
                </h5>
                <input type="email" class="form-control"  v-model="employerEmail" />
                <h5>
                    Название компании
                </h5>
                <input type="text" class="form-control"  v-model="employerCompany" />
                <h5>
                    Регион
                </h5>
                <input type="text" class="form-control"  v-model="employerRegion" />
                <div class="actions">
                    <button @click="createEmployer()" class="btn btn-primary">
                        Зарегистрироваться
                    </button>
                    <span>
                        Нажимая «Зарегистрироваться», вы подтверждаете, что ознакомлены и полностью согласны с условиями использования сайта.
                    </span>
                    <span @click="$router.push({ name: 'Login', query: { logintype: 'employer' } })" class="alreadyRegister">
                        У меня уже есть доступ,   войти
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as jwt from 'jsonwebtoken'

export default {
    name: 'EmployerRegister',
    data(){
        return {
            employerName: '',
            employerSecondName: '',
            employerPhone: '',
            employerEmail: '',
            employerCompany: '',
            employerRegion: 'Москва',
            token: '',
        }
    },
    methods: {
        createEmployer(){
            fetch(`https://workanaut.herokuapp.com/api/employers/create/?employername=${this.employerName}&employersecondname=${this.employerSecondName}&employeremail=${this.employerEmail}&employerphone=${this.employerPhone}&employercompany=${this.employerCompany}&employerregion=${this.employerRegion}`, {
            // fetch(`http://localhost:4000/api/employers/create/?employername=${this.employerName}&employersecondname=${this.employerSecondName}&employeremail=${this.employerEmail}&employerphone=${this.employerPhone}&employercompany=${this.employerCompany}&employerregion=${this.employerRegion}`, {
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
                    // alert('Зарегестрирован')
                    
                    // this.$router.push({ name: 'Login', query: { logintype: 'employer' } })

                    this.$router.push({ name: 'EmployerSetPassword', query: { email: this.employerEmail } })
                    
                    // this.token = jwt.sign({
                    //     phone: this.employerEmail
                    // }, 'workanautsecret', { expiresIn: '30m' })
                    // localStorage.setItem('workanauttoken', this.token)
                    // this.$router.push({ name: 'AuthPage', query: { usertype: 'employer' } })
                    // this.$router.push({ name: 'AuthPage', query: { usertype: 'employer' } })
                } else if(JSON.parse(result).status.includes('Error')){
                    alert('Уже зарегестрирован')
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
        min-height: 1000px;
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
        background-image: url('https://s3.nat-geo.ru/images/2020/6/4/c742c0414bf24c33a9ff2f67541ded02.max-2500x1500.jpg');
    }

</style>