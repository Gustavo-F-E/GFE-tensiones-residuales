import os
from PIL import Image

def reduce_image_quality_by_resizing(input_image_path, output_image_path, size_reduction):
    if not os.path.isfile(input_image_path):
        print(f"Error: El archivo {input_image_path} no existe.")
        return
    
    try:
        # Abrir la imagen original
        original_image = Image.open(input_image_path)
        
        # Obtener las dimensiones actuales
        original_width, original_height = original_image.size
        
        # Calcular las nuevas dimensiones (reducción)
        new_width = int(original_width * size_reduction / 100)
        new_height = int(original_height * size_reduction / 100)
        
        # Redimensionar la imagen a dimensiones más pequeñas
        resized_image = original_image.resize((new_width, new_height), Image.LANCZOS)
        
        # Ampliar la imagen nuevamente al tamaño original
        final_image = resized_image.resize((original_width, original_height), Image.LANCZOS)
        
        # Guardar la imagen final
        final_image.save(output_image_path, quality=85)  # Puedes ajustar la calidad si lo deseas
        print(f"La imagen se ha guardado en {output_image_path} con calidad reducida.")
    except Exception as e:
        print(f"Se produjo un error al procesar la imagen: {e}")

# Ejemplo de uso
#input_image_path = './tabla_A_5_14_c.png'
#output_image_path = './tabla_A_5_14_c_50.png'
#reduce_image_quality_by_resizing(input_image_path, output_image_path, size_reduction=50)  # Reducción del 70% en tamaño

nombres = [
  'figura_2_1.png', 'figura_3_15.png', 'figura_3_24.png', 'figura_4_12.png', 'figura_4_6.png', 'figura_5_7.png', 'figura_A_4_2.png', 'tabla_A_5_12.png', 'tabla_A_5_13_d.png', 'tabla_A_5_2_a.png', 'tabla_A_5_8.png', 'figura_2_2.png', 'figura_3_16.png', 'figura_3_3.png', 'figura_4_13.png', 'figura_4_7.png', 'figura_5_8.png', 'tabla_A_5_1.png', 'tabla_A_5_12_a.png', 'tabla_A_5_13_e.png', 'tabla_A_5_2_b.png', 'tabla_A_5_8_a.png', 'figura_2_3.png', 'figura_3_17.png', 'figura_3_4.png', 'figura_4_14.png', 'figura_4_8.png', 'figura_5_9.png', 'tabla_A_5_1_a.png', 'tabla_A_5_12_b.png', 'tabla_A_5_13_f.png', 'tabla_A_5_7A.png', 'tabla_A_5_8_b.png', 'figura_2_4.png', 'figura_3_18.png', 'figura_3_5.png', 'figura_4_15.png', 'figura_4_9.png', 'figura_7_1.png', 'tabla_A_5_1_b.png', 'tabla_A_5_12_c.png', 'tabla_A_5_14.png', 'tabla_A_5_7A_a.png', 'figura_2_5.png', 'figura_3_19.png', 'figura_3_6.png', 'figura_4_16.png', 'figura_5_1.png', 'figura_7_2.png', 'tabla_A_5_11.png', 'tabla_A_5_12_d.png', 'tabla_A_5_14_a.png', 'tabla_A_5_7A_b.png', 'figura_3_1.png', 'figura_3_2.png', 'figura_3_7.png', 'figura_4_17.png', 'figura_5_10.png', 'figura_A_2_1.png', 'tabla_A_5_11_a.png', 'tabla_A_5_12_e.png', 'tabla_A_5_14_b.png', 'tabla_A_5_7B.png', 'figura_3_10.png', 'figura_3_20.png', 'figura_3_8.png', 'figura_4_18.png', 'figura_5_2.png', 'figura_A_3_1.png', 'tabla_A_5_11_b.png', 'tabla_A_5_12_f.png', 'tabla_A_5_14_c.png', 'tabla_A_5_7B_a.png', 'figura_3_11.png', 'figura_3_9.png', 'figura_4_2.png', 'figura_5_3.png', 'figura_A_3_2.png', 'tabla_A_5_11_c.png', 'tabla_A_5_13.png', 'tabla_A_5_14_d.png', 'tabla_A_5_7B_b.png', 'figura_3_12.png', 'figura_3_21.png', 'figura_4_1.png', 'figura_4_3.png', 'figura_5_4.png', 'figura_A_3_3.png', 'tabla_A_5_11_d.png', 'tabla_A_5_13_a.png', 'tabla_A_5_14_e.png', 'tabla_A_5_7C.png', 'figura_3_13.png', 'figura_3_22.png', 'figura_4_10.png', 'figura_4_4.png', 'figura_5_5.png', 'figura_A_3_4.png', 'tabla_A_5_11_e.png', 'tabla_A_5_13_b.png', 'tabla_A_5_14_f.png', 'tabla_A_5_7C_a.png', 'figura_3_14.png', 'figura_3_23.png', 'figura_4_11.png', 'figura_4_5.png', 'figura_5_6.png', 'figura_A_4_1.png', 'tabla_A_5_11_f.png', 'tabla_A_5_13_c.png', 'tabla_A_5_2.png', 'tabla_A_5_7C_b.png',
  ]
  
for nombre in nombres:
    input_image_alta_calidad = f'./alta_calidad/{nombre}'
    output_image_media_calidad  = f'./media_calidad/{nombre}'
    output_image_baja_calidad  = f'./baja_calidad/{nombre}'
    reduce_image_quality_by_resizing(input_image_alta_calidad, output_image_baja_calidad, size_reduction=10)  # Reducción del 10% en tamaño
    reduce_image_quality_by_resizing(input_image_alta_calidad, output_image_media_calidad, size_reduction=50)  # Reducción del 50% en tamaño