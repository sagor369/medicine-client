import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
type TSelectProps = {
    label: string 
    name: string 
    placeholder:string
    options: {
        label: string 
        value: string 
    }[] | undefined
}

const PHSelect = ({label, name, options, placeholder} : TSelectProps) => {

  return (
    <FormField
    name={name}
    render={
        ({field})=>  <FormItem>
        <FormLabel>{label}</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {
              options?.map((item) =><SelectItem value={item?.value}>{item.label}</SelectItem>
            )
            }
            
          </SelectContent>
        </Select>
        <FormMessage  />
      </FormItem>
        
      //   <Form.Item label={label}>
      //   <Select
      //     style={{ width: "100%" , height: '40px'}}
      //     {...field}
      //     options={options}
      //   />
      //   {error && <small style={{color: "red"}}>{error?.message}</small>}
      // </Form.Item>
    }
    />
   
  );
};

export default PHSelect;
