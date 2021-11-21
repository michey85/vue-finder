<template>
<div>
    <base-dialog :show="!!error" fixed title="An error ocurred" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" fixed title="Authenticating...">
        <base-spinner />
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitForm">
            <label class="form-control">
                Email
                <input type="email" v-model.trim="email"/>
            </label>
            <label class="form-control">
                Password
                <input type="password" v-model.trim="password"/>
            </label>
            <p v-if="!formIsValid">Please enter a valid email and password (should be at least 6 characters long)</p>
            <base-button>{{ submitButtonCaption }}</base-button>
            <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeButtonCaption }}</base-button>
        </form>
    </base-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            formIsValid: true,
            mode: 'login',
            isLoading: false,
            error: null,
        }
    },
    computed: {
        submitButtonCaption() {
            return this.mode === 'login' ? 'LogIn' : 'SignUp'
        },
        switchModeButtonCaption() {
            return this.mode === 'login' ? 'SignUp instead' : 'LogIn instead';
        },
    },
    methods: {
        async submitForm() {
            this.formIsValid = true;

            if (!this.email || this.password.length < 6) {
                this.formIsValid = false;
                return;
            }

            this.isLoading = true;

            try {
                await this.$store.dispatch(this.mode, {
                    email: this.email,
                    password: this.password,
                });
                const redirectUrl = '/' + (this.$router.query?.redirect || 'instructors');
                this.$router.replace(redirectUrl);
            } catch (error) {
                this.error = error.message || 'Try it later!';
            }

            this.isLoading = false;
        },
        switchAuthMode() {
            this.mode = this.mode === 'login' ? 'signup' : 'login';
        },
        handleError() {
            this.error = null;
        }
    },
}
</script>

<style lang="scss" scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}


input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid var(--gray-100);
  padding: 0.15rem;
  font-weight: normal;
}

input:focus,
textarea:focus {
  border-color: var(--color-primary-600);
  background-color: var(--gray-100);
  outline: none;
}
</style>