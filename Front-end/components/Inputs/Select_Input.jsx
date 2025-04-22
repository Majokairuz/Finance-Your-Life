import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Platform,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

const DocumentPicker = ({ value, onChange }) => {
  const [showModal, setShowModal] = useState(false);

  const options = [
    { label: "C.C", value: "cc" },
    { label: "T.I", value: "ti" },
    { label: "C.E", value: "ce" },
  ];

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || "T. Documento";

  return (
    <>
      {Platform.OS === "ios" ? (
        <>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setShowModal(true)}
          >
            <Text style={{ color: value ? "#000" : "#999" }}>
              {selectedLabel}
            </Text>
            <Ionicons name="chevron-down" size={18} color="#888" />
          </TouchableOpacity>

          <Modal visible={showModal} transparent animationType="slide">
            <TouchableOpacity
              style={styles.modalBackground}
              activeOpacity={1}
              onPressOut={() => setShowModal(false)}
            >
              <View style={styles.pickerWrapper}>
                <Picker
                  selectedValue={value}
                  onValueChange={(itemValue) => {
                    onChange(itemValue);
                    setShowModal(false);
                  }}
                >
                  <Picker.Item label="T. Documento" value="" color="#999" style={{fontSize: 16}} />
                  {options.map((item) => (
                    <Picker.Item
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    />
                  ))}
                </Picker>
              </View>
            </TouchableOpacity>
          </Modal>
        </>
      ) : (
        <View style={styles.input}>
          <Picker
            selectedValue={value}
            onValueChange={onChange}
            style={{ flex: 1 }}
            dropdownIconColor="#666"
          >
            <Picker.Item label="T. Doc" value="" color="#999" />
            {options.map((item) => (
              <Picker.Item
                key={item.value}
                label={item.label}
                value={item.value}
              />
            ))}
          </Picker>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === "ios" ? 14 : 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: 70,
    width: "50%",
    fontSize: 16,
    fontFamily: "PoppinsMedium",

  },
  modalBackground: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  pickerWrapper: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default DocumentPicker;