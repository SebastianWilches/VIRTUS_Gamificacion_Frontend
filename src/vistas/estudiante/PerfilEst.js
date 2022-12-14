import './PerfilEst.css';

export default function PerfilEst(props) {

    return (
        <div class="infoEstudiante">

            <div class="cardInfoEstudiante">
                <div class="headerCardInfoEstudiante">
                    <h1>Perfil Estudiante</h1>
                    <img
                    class="imgEstudiante"
                        src="https://www.theedublogger.com/files/2020/06/Dexter-the-cat-Icons-19-128x128.png"
                        alt="imagen de perfil"
                    />
                </div>


                <p>Nombre: <span class="capitalizar">{props.data.usuario.nombre}</span></p>
                <p>Apellido: <span class="capitalizar">{props.data.usuario.apellido}</span></p>
                <p>Rol: <span class="capitalizar">{props.data.usuario.rol}</span></p>
                <p>Correo: <span>{props.data.usuario.correo}</span></p>
                <p>Fecha de nacimiento: <span>{props.data.usuario.fechaNacimiento}</span></p>

            </div>


        </div>)

}