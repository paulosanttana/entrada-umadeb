import { useEffect, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import { api } from "../../services/api";
import { DATAZERO } from "../../utils/constantes";
import { useNavigation } from "@react-navigation/native";
import { dataAtualFormatada, formatDateSelect } from "../../utils/format";

export interface Event {
  Ativo: boolean | undefined;
  DataCadastro: string | undefined;
  Descricao: string | undefined;
  Id: number;
  Lotacao: number | undefined;
}

export interface Evento {
  data: Event[];
}

export function Home() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState("");

  const [eventos, setEventos] = useState<any>([]);
  const [eventoPrincipal, setEventoPrincipal] = useState<any>([]);
  const [selected, setSelected] = useState([]);

  const navigation = useNavigation();

  // function openScreen() {
  //   navigation.navigate("Qrcode");
  // }

  useEffect(() => {
    const fetchUevents = async () => {
      try {
        const response = await api.get<Event[]>("/evento/GetEventoPrincipal");

        const resEvents = response.data.map((r) => {
          console.log(r.DataCadastro);
          return `Evento ${formatDateSelect(r.DataCadastro)}`;
        });
        const resEventoPrincipal = response.data.map((r) => {
          console.log(r.Descricao);
          setEventoPrincipal(resEventoPrincipal);
        });

        setEventos(resEvents);
        setEventoPrincipal(resEventoPrincipal);
        // setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUevents();
  }, []);

  function handleParticipantAdd() {
    let dataCheck: Date = new Date();
    setTimer(dataAtualFormatada(dataCheck));
    setCounter(counter + 1);
    console.log(counter, timer);
  }

  return (
    <View style={styles.container}>
      {/* <Button title="Leitor QR Code" onPress={openScreen} /> */}
      <Text style={styles.txtType}>ENTRADA</Text>
      <Text
        style={styles.txtUmadeb}
      >{`Congresso Geral da UMADEB 2022 ${eventoPrincipal}`}</Text>
      <View
        style={{
          borderWidth: 2,
          borderColor: "#00337C",
          borderRadius: 4,
          marginTop: 20,
        }}
      >
        <Picker
          selectedValue={selected}
          style={styles.txtSelect}
          dropdownIconColor="#fff"
          onValueChange={(itemValue) => setSelected(itemValue)}
        >
          {eventos.map((even: any) => {
            return <Picker.Item key={even} label={even} value={even} />;
          })}
        </Picker>
      </View>
      <View style={styles.viewNumber}>
        <Text style={styles.number}>{counter}</Text>
      </View>

      <View style={styles.time}>
        <Text style={styles.txtTimeCheckin}>
          {timer ? `Ultimo checkin ` : ""}
        </Text>
        <Text style={styles.timeCheckin}>
          {timer !== DATAZERO.DATE_ZERO ? timer : ""}
        </Text>
      </View>

      <View style={styles.areaButto}>
        <TouchableOpacity
          style={styles.buttonCount}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonTxt}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
