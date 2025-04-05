<script setup lang="ts">
const name = ref('');
const email = ref('');
const message = ref('');
const successMessage = ref('');
const errorMessage = ref('');

const sendEmail = async () => {
  successMessage.value = '';
  errorMessage.value = '';
  const config = useRuntimeConfig()

  try {
    const response = await fetch(`${config.public.NUXT_PUBLIC_API_URL}/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name.value, email: email.value, message: message.value }),
    });

    const data = await response.json();

    if (data.success) {
      successMessage.value = 'メッセージを送信しました。お問い合わせありがとうございます。';
      name.value = '';
      email.value = '';
      message.value = '';
    } else {
      errorMessage.value = 'メッセージの送信に失敗しました。時間をおいて再度お試しください。';
    }
  } catch (error) {
    errorMessage.value = 'エラーが発生しました。時間をおいて再度お試しください。';
  }
};

useHead({
  title: 'Contact',
  meta: [
    {
      name: 'description',
      content: '',
    },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+JP:wght@200;300;400&display=swap'
    }
  ]
});
</script>

<template>
  <div class="contact-container">
    <div class="form-wrapper">
      <div class="form-header">
        <h1 class="title">
          <span class="en">Contact</span>
          <span class="jp">お問い合わせ</span>
        </h1>
        <p class="subtitle">ご質問・ご要望など<br class="md:hidden">お気軽にお問い合わせください</p>
      </div>

      <form @submit.prevent="sendEmail" class="contact-form">
        <div class="form-group">
          <label for="name">お名前</label>
          <input
            id="name"
            v-model="name"
            type="text"
            required
            class="form-input"
            placeholder="山田 太郎"
          />
        </div>

        <div class="form-group">
          <label for="email">メールアドレス</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="form-input"
            placeholder="example@email.com"
          />
        </div>

        <div class="form-group">
          <label for="message">メッセージ</label>
          <textarea
            id="message"
            v-model="message"
            rows="5"
            required
            class="form-input"
            placeholder="お問い合わせ内容をご記入ください"
          ></textarea>
        </div>

        <div class="button-wrapper">
          <button type="submit" class="submit-button">
            送信する
          </button>
        </div>
      </form>

      <!-- アラートメッセージ -->
      <div class="alert-container">
        <div v-if="successMessage" class="alert success">
          <div class="alert-content">
            <svg class="alert-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <p>{{ successMessage }}</p>
          </div>
        </div>

        <div v-if="errorMessage" class="alert error">
          <div class="alert-content">
            <svg class="alert-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            <p>{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-container {
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: #fdfbf9;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
}

.form-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;

  .title {
    margin-bottom: 1rem;

    .en {
      display: block;
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.5rem;
      font-weight: 300;
      letter-spacing: 0.2em;
      color: #2c2c2c;
    }

    .jp {
      display: block;
      font-family: 'Noto Serif JP', serif;
      font-size: 1rem;
      font-weight: 200;
      letter-spacing: 0.1em;
      color: #666;
      margin-top: 0.5rem;
    }
  }

  .subtitle {
    font-family: 'Noto Serif JP', serif;
    font-size: 0.9rem;
    font-weight: 300;
    color: #666;
    letter-spacing: 0.05em;
  }
}

.contact-form {
  .form-group {
    margin-bottom: 2rem;

    label {
      display: block;
      font-family: 'Noto Serif JP', serif;
      font-size: 0.9rem;
      font-weight: 300;
      color: #2c2c2c;
      margin-bottom: 0.5rem;
    }
  }
}

.form-input {
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  font-family: 'Noto Serif JP', serif;
  font-size: 0.9rem;
  color: #2c2c2c;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2c2c2c;
    box-shadow: 0 0 0 2px rgba(44, 44, 44, 0.1);
  }

  &::placeholder {
    color: #999;
    font-weight: 200;
  }
}

.button-wrapper {
  margin-top: 3rem;
  text-align: center;
}

.submit-button {
  padding: 1rem 4rem;
  background-color: #2c2c2c;
  color: #fff;
  font-family: 'Noto Serif JP', serif;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  border-radius: 4px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1a1a1a;
    transform: translateY(-2px);
  }
}

.alert-container {
  margin-top: 2rem;
}

.alert {
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;

  &.success {
    background-color: rgba(236, 253, 245, 0.8);
    border: 1px solid #d1fae5;
    color: #065f46;
  }

  &.error {
    background-color: rgba(254, 242, 242, 0.8);
    border: 1px solid #fee2e2;
    color: #991b1b;
  }

  .alert-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .alert-icon {
    width: 1.25rem;
    height: 1.25rem;
  }

  p {
    font-family: 'Noto Serif JP', serif;
    font-size: 0.9rem;
    font-weight: 300;
  }
}

@media (max-width: 768px) {
  .contact-container {
    padding: 2rem 1rem;
  }

  .form-wrapper {
    padding: 1.5rem;
    margin: 0 0.5rem;
  }

  .form-header {
    margin-bottom: 2rem;

    .title {
      .en {
        font-size: 2rem;
        margin-bottom: 0.3rem;
      }

      .jp {
        font-size: 0.9rem;
        margin-top: 0.3rem;
      }
    }

    .subtitle {
      font-size: 0.85rem;
      line-height: 1.6;
      padding: 0 1rem;
    }
  }

  .contact-form {
    .form-group {
      margin-bottom: 1.5rem;

      label {
        font-size: 0.85rem;
        margin-bottom: 0.4rem;
      }
    }
  }

  .form-input {
    padding: 0.8rem;
    font-size: 0.85rem;
  }

  .button-wrapper {
    margin-top: 2rem;
  }

  .submit-button {
    width: 100%;
    padding: 0.8rem 2rem;
    font-size: 0.85rem;
  }

  .alert {
    padding: 0.8rem;
    
    p {
      font-size: 0.85rem;
      line-height: 1.5;
    }

    .alert-icon {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
