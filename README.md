# CalculadoraM8

entramos en el fichero de configuración de nuestro servicio y lo modificamos como anteriormente en la manera 1, pero esta vez el fichero es m8MSGI.localhost.conf.

$	sudo nano /etc/apache2/sites-available/NOMBRE_ARCHIVO.conf 




/etc/apache2/sites-available/m8MSGI.localhost.conf

<VirtualHost *:80>

        ServerName m8.localhost
        ServerAdmin cf17sergio.castillero@iesjoandaustria.org
        DocumentRoot /var/www/m8
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
        WSGIDaemonProcess flaskServer user=user1 group=group1 threads=5
        WSGIScriptAlias / /var/www/m8/python/flaskServer/flaskServer.wsgi
        <Directory /var/www/m8/python/flaskServer>
             WSGIProcessGroup flaskServer
             WSGIApplicationGroup %{GLOBAL}
             Order deny,allow
             Allow from all
        </Directory>
        
</VirtualHost>



Ahora que ya hemos modificado el servidor virtual, solo falta habilitarlo. Podemos usar la herramienta a2ensite para ello.

$	sudo a2ensite m8MSGI.localhost.conf 


Para que los cambios se efectúen solo faltaria reiniciar Apache.

$	sudo systemctl reload apache2 


Una vez modificado la configuración y reiniciado el apache, nos dirigiremos al directorio donde se aloja nuestra app python-flask llamada calc.py y crearemos un fichero llamado flaskServer.wsgi con el siguiente contenido.

import sys
sys.path.insert(0, '/var/www/m8/python/flaskServer')

from calc import app as application


Mediante la herramienta apiary.io se ha creado y diseñado la api utilizarlo en la aplicación de la calculdaora y las rutas para utilizar las operaciones de una calculadora son las siguientes:

Suma: m8/localhost/suma/numero1/numero2

Resta: m8/localhost/resta/numero1/numero2

Multiplicación: m8/localhost/multiplicacio/numero1/numero2

División: m8/localhost/divisio/numero1/numero2


