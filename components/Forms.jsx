import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    Alert,
} from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import useFetch from '../hooks/useFetch'

const Forms = () => {
    const { control, handleSubmit, setValue } = useForm()
    const cleanForm = () => {
        setValue('name', '')
        setValue('email', '')
        setValue('phone', '')
        setValue('speciality', '')
        setValue('password', '')
    }

    const { nurseRequest } = useFetch()

    const onSubmit = async data => {
        try {
            Alert.alert('Agregar Empleado?', '', [
                {
                    text: 'Si',
                    onPress: async () => {
                        await nurseRequest(data)
                        Alert.alert('Agregado Correctamente')
                    },
                },
            ])
        } catch (err) {
            console.log(err)
        }
        cleanForm()
    }

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholder="Ingresa nombre"
                        style={styles.formInput}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="name"
            />

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.formInput}
                        placeholder="Ingresa correo electrónico"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
            />

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.formInput}
                        placeholder="Ingresa numero de teléfono"
                        keyboardType="numeric"
                        maxLength={10}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="phone"
            />

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.formInput}
                        placeholder="Ingresa especialidad"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="speciality"
            />

            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.formInput}
                        secureTextEntry={true}
                        placeholder="Ingresa contraseña"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="password"
            />
            <TouchableHighlight
                underlayColor={'#91D8E4'}
                onPress={handleSubmit(onSubmit)}
                style={styles.buttonForm}
            >
                <Text style={styles.textForm}>Guardar</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        margin: '8%',
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
    },
    formInput: {
        width: '80%',
        height: '13%',
        borderWidth: 1,
        textAlign: 'center',
        margin: '1%',
        borderRadius: 4,
        borderColor: '#0006',
    },
    buttonForm: {
        borderWidth: 1,
        width: '80%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ADE792',
        borderRadius: 4,
        borderColor: '#ADE792',
        marginTop: 15,
    },
    textForm: {
        color: '#FFFF',
    },
})

export default Forms
