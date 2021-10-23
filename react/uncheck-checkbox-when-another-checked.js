import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, setValue } = useForm();

  const onSubmit = (data) => console.log(data);

  const watchAllFields = watch();

  useEffect(() => {
    if (watchAllFields.first) {
      setValue("second", false);
    }
  }, [watchAllFields.first, setValue]);

  useEffect(() => {
    if (watchAllFields.second) {
      setValue("first", false);
    }
  }, [watchAllFields.second, setValue]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="checkbox" {...register("first")} />
        <input type="checkbox" {...register("second")} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
