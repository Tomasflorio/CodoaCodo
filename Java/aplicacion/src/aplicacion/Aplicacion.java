/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package aplicacion;

import java.util.Scanner;

/**
 *
 * @author tomas
 */
public class Aplicacion {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner entrada = new Scanner(System.in);
        
        System.out.println("Ingresar nombre de usuario");
        String nombre = entrada.nextLine();
        System.out.println("Ingresar Apellido");
        String apellido = entrada.nextLine();
        System.out.println("Ingresar hobbie");
        String hobbie = entrada.nextLine();
        System.out.println("Ingresar editor de codigo preferido");
        String ide = entrada.nextLine();
        System.out.println("Ingresar SO preferido");
        String so = entrada.nextLine();
        System.out.println("Ingresar Edad");
        int edad = entrada.nextInt();
        Usuario usuario = new Usuario(nombre,apellido,hobbie,ide,so,edad);
     
        System.out.println("El Nombre y apellido del Usuario es: " +usuario.getNombre()+" "+usuario.getApellido()+" Su hobbie es: "+usuario.getHobbie()+" Su ide preferido es: "+usuario.getIde()+" y su SO preferido es: "+ usuario.getSistema_operativo() );
    }
}
