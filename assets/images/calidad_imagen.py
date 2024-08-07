import os
from PIL import Image

def reduce_image_quality(input_image_path, output_image_path, quality_reduction):
    if not os.path.isfile(input_image_path):
        print(f"Error: El archivo {input_image_path} no existe.")
        return
    
    try:
        # Abrir la imagen original
        original_image = Image.open(input_image_path)
        
        # Calcular la nueva calidad
        quality = max(1, 100 - quality_reduction)  # Asegurarse que la calidad no sea menor a 1
        
        # Guardar la imagen con la nueva calidad
        original_image.save(output_image_path, quality=quality)
        print(f"La imagen se ha guardado en {output_image_path} con una calidad reducida del {quality_reduction}%.")
    except Exception as e:
        print(f"Se produjo un error al procesar la imagen: {e}")

# Ejemplo de uso
input_image_path = './tabla_A_5_14_c_30.png'
output_image_path = './tabla_A_5_14_c_3.png'
reduce_image_quality(input_image_path, output_image_path, quality_reduction=3)