import { SubmitHandler, useForm } from "react-hook-form";


interface IEmail {
  email: string;
}
function useFooterState() {
  const { register, handleSubmit, formState: { errors }, reset }
    = useForm<IEmail>(
      {
        mode: 'onChange'
      }
    )

  const onSubmit: SubmitHandler<IEmail> = data => {
    console.log(data)
    reset()
  }

  return { register, handleSubmit, onSubmit, errors, reset }

}

export default useFooterState