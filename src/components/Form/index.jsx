import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "components/Button";
import styles from "./Form.module.css";

const createUserFormSchema = z.object({

  name: z.string()
    .nonempty("Campo nome é obrigatório")
    .min(3, "Escreva seu nome sem abreviação")
    .transform(name=>{
      return name.trim().split(' ').map(word =>{
        return word[0].toLocaleUpperCase().concat(word.substring(1))
      }).join(' ')
    }),
  email: z.string()
    .nonempty("Campo e-mail é obrigatório")
    .email("Formato de e-mail inválido"),
  subject: z.string()
    .nonempty("Campo assunto é obrigatório"),
  message: z.string()
    .nonempty("Campo mensagem é obrigatório"),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  });

  function createUser(data){
    console.log(data)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(createUser)}>

      <div>
        <label>Nome</label>
        <input 
            type="text"
            placeholder="Nome"
            {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label>E-mail</label>
        <input 
            type="email" 
            placeholder="Digite seu email: contato@email.com"
            {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label >Assunto</label>
        <input 
            type="text" 
            placeholder="Digite o assunto "
            {...register("subject")} />
        {errors.subject && <span>{errors.subject.message}</span>}
      </div>

      <div>
        <label>Mensagem</label>
        <input 
            type="text"
            placeholder="Digite sua mensagem"
            {...register("message")} />
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <Button>Enviar</Button>
      
    </form>
   
  );
  
}
export default Form;
