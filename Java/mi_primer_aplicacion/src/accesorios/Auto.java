/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package accesorios;

/**
 *
 * @author tomas
 */
public class Auto {
    public int velocidad;
    public boolean encendido;
    public int capacidad;
    public String color,modelo,anio,patente;
	
    public Auto(int velocidad, boolean encendido, int capacidad, String color, String modelo, String anio,
			String patente) {
		super();
		this.velocidad = velocidad;
		this.encendido = encendido;
		this.capacidad = capacidad;
		this.color = color;
		this.modelo = modelo;
		this.anio = anio;
		this.patente = patente;
	}

	public boolean isEncendido() {
		return encendido;
	}

	public void setEncendido(boolean encendido) {
		this.encendido = encendido;
	}

    
}
