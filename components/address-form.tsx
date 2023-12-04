import { AddressElement } from "@stripe/react-stripe-js";

interface AddressFormProps {

}
export function AddressForm(props : AddressFormProps){
    return(
        <form>
          <h3>Endereço</h3>
          <AddressElement
            options={{ mode: "shipping" }}
            onChange={(event) => {
              if (event.complete) {
                const address = event.value.address;
              }
            }}
          />
      </form>
    )
}