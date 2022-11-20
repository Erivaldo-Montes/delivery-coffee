import { MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CoffeeContext } from '../../../../context/coffeeContext'
import {
  DeliveryAddressFormContainer,
  InputDelivery,
  SelectDelivaryContainer,
} from './styled'

export function DeliveryAddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const { federalUnitsOption } = useContext(CoffeeContext)

  return (
    <DeliveryAddressFormContainer>
      <form id="delivery-address">
        <span>
          <MapPinLine size={22} id="mapPin" />
          <div>
            <p>Endereço de entrega</p>
            Informe o endereço onde deseja receber seu pedido
          </div>
        </span>
        <div id="form_inputs">
          <InputDelivery
            type="number"
            placeholder="CEP"
            id="CEP"
            min={1}
            {...register('CEP', { valueAsNumber: true })}
            isInvalid={!!errors.CEP}
          />

          <InputDelivery
            type="text"
            placeholder="Rua"
            id="street"
            {...register('street')}
            isInvalid={!!errors.street}
          />

          <InputDelivery
            type="number"
            placeholder="Número"
            id="number"
            {...register('number', { valueAsNumber: true })}
            isInvalid={!!errors.number}
          />
          <InputDelivery
            type="text"
            placeholder="Complemento                                                opcional"
            id="complement"
            {...register('complment')}
            isInvalid={false}
          />
          <InputDelivery
            type="text"
            placeholder="Bairro"
            id="district"
            {...register('district')}
            isInvalid={!!errors.district}
          />

          <InputDelivery
            type="text"
            placeholder="Cidade"
            id="city"
            {...register('city')}
            isInvalid={!!errors.city}
          />

          <SelectDelivaryContainer
            placeholder="UF"
            id="federal_unit"
            {...register('federal_unit')}
            isInvalid={!!errors.federal_unit}
          >
            <option value="" disabled selected>
              UF
            </option>
            {federalUnitsOption.map((unit) => {
              return (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              )
            })}
          </SelectDelivaryContainer>
        </div>
      </form>
      <div></div>
    </DeliveryAddressFormContainer>
  )
}
